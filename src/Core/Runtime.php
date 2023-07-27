<?php

/*
 * This file is part of the Yabe package.
 *
 * (c) Joshua Gugun Siagian <suabahasa@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
declare (strict_types=1);
namespace Yabe\Kokoro\Core;

use OXY_VSB_Connection;
use WP_Error;
use WP_REST_Request;
use wpdb;
use Yabe\Kokoro\Utils\Common;
class Runtime
{
    public function __construct()
    {
        \add_filter('rest_endpoints', fn(array $endpoints) => $this->filter_rest_endpoints($endpoints), 1000001);
        $this->register_oxygen_connection();
        $this->register_remote_sites();
    }
    /**
     * Replace the permission callback for Oxygen's REST API endpoints.
     */
    public function filter_rest_endpoints(array $endpoints) : array
    {
        if (!isset($endpoints['/oxygen-vsb-connection/v1'])) {
            return $endpoints;
        }
        foreach ($endpoints as $key => $value) {
            if (\strpos($key, '/oxygen-vsb-connection/v1/') !== \false) {
                foreach ($value as $k => $v) {
                    if (\is_numeric($k) && isset($endpoints[$key][$k]['permission_callback'])) {
                        $endpoints[$key][$k]['permission_callback'] = fn(WP_REST_Request $wprestRequest) => $this->custom_permission_callback($wprestRequest);
                    }
                }
            }
        }
        return $endpoints;
    }
    /**
     * Yabe Kokoro's middleware as replacement for Oxygen's REST API middleware.
     *
     * @return bool|WP_Error
     */
    public function custom_permission_callback(WP_REST_Request $wprestRequest)
    {
        /** @var wpdb $wpdb */
        global $wpdb;
        $headers = $wprestRequest->get_headers();
        $auth = isset($headers['auth']) && (\is_countable($headers['auth']) ? \count($headers['auth']) : 0) > 0 ? \sanitize_text_field(\array_shift($headers['auth'])) : \false;
        // check with Kokoro's middleware
        if ($auth) {
            $sql = "\n                SELECT *\n                FROM {$wpdb->prefix}{$wpdb->yabe_kokoro_prefix}_licenses l\n                WHERE MD5(CONCAT('!kokoro:', l.license_key)) = %s\n            ";
            $sql = $wpdb->prepare($sql, $auth);
            $license = $wpdb->get_row($sql);
            if ($license) {
                // check if license is disabled
                if (!(bool) $license->status) {
                    return new WP_Error('rest_forbidden', \__('Sorry, the license is disabled.', 'yabe-kokoro'), ['status' => 403]);
                }
                // check if license is expired
                if ($license->expired_at && (int) $license->expired_at < \time()) {
                    return new WP_Error('rest_forbidden', \__('Sorry, the license is expired.', 'yabe-kokoro'), ['status' => 403]);
                }
                // check if site is registered
                $host = \false;
                $user_agent = isset($headers['user_agent']) && (\is_countable($headers['user_agent']) ? \count($headers['user_agent']) : 0) > 0 ? \sanitize_text_field(\array_shift($headers['user_agent'])) : \false;
                if ($user_agent) {
                    $ua = \explode(';', $user_agent);
                    if (\count($ua) > 1) {
                        $host = \trim($ua[1]);
                    }
                }
                if (!$host) {
                    return new WP_Error('rest_forbidden', \__("Sorry, it's seems your request not coming from WordPress.", 'yabe-kokoro'), ['status' => 400]);
                }
                $sql = "\n                    SELECT\n                        s.*\n                    FROM {$wpdb->prefix}{$wpdb->yabe_kokoro_prefix}_sites s\n                    LEFT JOIN {$wpdb->prefix}{$wpdb->yabe_kokoro_prefix}_licenses l ON l.id = s.license_id\n                    WHERE \n                        l.id = %d\n                        AND\n                        s.site_url = %s\n                    GROUP BY s.id\n                ";
                $sql = $wpdb->prepare($sql, [(int) $license->id, $host]);
                $site = $wpdb->get_row($sql);
                // if registered
                if ($site) {
                    // check if status is enabled
                    if (!(bool) $site->status) {
                        return new WP_Error('rest_forbidden', \__('Sorry, the site is disabled.', 'yabe-kokoro'), ['status' => 403]);
                    }
                    return \true;
                }
                // if not registered
                $sql = "\n                    SELECT COUNT(*) AS total_site\n                    FROM {$wpdb->prefix}{$wpdb->yabe_kokoro_prefix}_sites s\n                    LEFT JOIN {$wpdb->prefix}{$wpdb->yabe_kokoro_prefix}_licenses l ON l.id = s.license_id\n                    WHERE \n                        l.id = %d\n                        AND\n                        s.status = 1\n                    GROUP BY l.id\n                ";
                $sql = $wpdb->prepare($sql, (int) $license->id);
                $total_site = $wpdb->get_var($sql);
                // check if max site limit is reached, if not, register the site
                if ($license->max_sites && (int) $total_site >= (int) $license->max_sites) {
                    return new WP_Error('rest_forbidden', \__('Sorry, you have reached the maximum site limit.', 'yabe-kokoro'), ['status' => 403]);
                }
                $wpdb->insert(\sprintf('%s%s_sites', $wpdb->prefix, $wpdb->yabe_kokoro_prefix), ['uid' => Common::random_slug(10), 'license_id' => $license->id, 'site_url' => $host, 'status' => 1, 'created_at' => \time(), 'updated_at' => \time()], ['%s', '%d', '%s', '%d', '%d', '%d']);
                return \true;
            }
        }
        /**
         * check with oxygen's middleware
         *
         * @see OXY_VSB_Connection::oxygen_vsb_access_key_check()
         */
        $storedKey = \get_option('oxygen_vsb_connection_access_key');
        if ($auth && $storedKey && \hash_equals($auth, \md5($storedKey))) {
            return \true;
        } elseif ($storedKey === \false && $auth === \false) {
            return \true;
        }
        return \false;
    }
    /**
     * Register Oxygen connection.
     */
    public function register_oxygen_connection() : void
    {
        if (!\class_exists(OXY_VSB_Connection::class) || \get_option('oxygen_vsb_enable_connection')) {
            return;
        }
        \add_filter('option_oxygen_vsb_enable_connection', static fn() => 'true', 1000001);
        new OXY_VSB_Connection();
    }
    public function register_remote_sites() : void
    {
        if (!\is_user_logged_in()) {
            return;
        }
        /** @var wpdb $wpdb */
        /** @var array $ct_source_sites */
        global $wpdb, $ct_source_sites;
        if ($ct_source_sites === null) {
            $ct_source_sites = [];
        }
        $sql = "\n            SELECT\n                r.uid,\n                r.title,\n                r.remote_url,\n                r.license_key\n            FROM {$wpdb->prefix}{$wpdb->yabe_kokoro_prefix}_remotes r\n            WHERE r.status = 1\n        ";
        $result = $wpdb->get_results($sql);
        $items = [];
        foreach ($result as $row) {
            $items[$row->uid] = ['label' => $row->title, 'url' => $row->remote_url, 'accesskey' => $row->license_key];
        }
        $ct_source_sites = \array_merge($items, $ct_source_sites);
    }
}
