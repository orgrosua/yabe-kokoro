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
namespace Yabe\Kokoro\Ecommerce\Platform\WooCommerce;

use WC_Abstract_Order;
use wpdb;
use Yabe\Kokoro\Utils\Config;
use function wc_get_product;
/**
 * @since 1.0.0
 */
class Email
{
    public function __construct()
    {
        /**
         * @package WooCommerce
         * @link https://woocommerce.github.io/code-reference/files/woocommerce-templates-emails-email-order-details.html#source-view.90
         */
        \add_action('woocommerce_email_after_order_table', fn(WC_Abstract_Order $wcAbstractOrder, $sent_to_admin, $plain_text, $email) => $this->email_after_order_table($wcAbstractOrder, $sent_to_admin, $plain_text, $email), 1000001, 4);
    }
    private function is_order_complete(int $post_id) : bool
    {
        return (bool) \get_post_meta($post_id, 'kokoro_order_complete', \true);
    }
    private function email_after_order_table(WC_Abstract_Order $wcAbstractOrder, $sent_to_admin, $plain_text, $email)
    {
        if (!Config::get('ecommerce.woocommerce.print_receipt_email', \false)) {
            return;
        }
        if (!$wcAbstractOrder) {
            return;
        }
        if (!$this->is_order_complete($wcAbstractOrder->get_id())) {
            return;
        }
        /** @var wpdb $wpdb */
        global $wpdb;
        $sql = "\n            SELECT *\n            FROM {$wpdb->prefix}{$wpdb->yabe_kokoro_prefix}_orders o\n            WHERE \n                o.vendor = 'woocommerce'\n                AND o.order_id = %d\n        ";
        $sql = $wpdb->prepare($sql, $wcAbstractOrder->get_id());
        $licenseOrders = $wpdb->get_results($sql);
        $site_url = \get_site_url();
        $site_name = \get_bloginfo('name');
        $table_body = '';
        foreach ($licenseOrders as $licenseOrder) {
            $sql = "\n                SELECT *\n                FROM {$wpdb->prefix}{$wpdb->yabe_kokoro_prefix}_licenses l\n                WHERE l.id = %d\n            ";
            $sql = $wpdb->prepare($sql, $licenseOrder->license_id);
            $row = $wpdb->get_row($sql);
            if (!$row) {
                continue;
            }
            if (wc_get_product($licenseOrder->product_id)) {
                $table_body .= '<br><b>Product:</b> ' . wc_get_product($licenseOrder->product_id)->get_name();
            }
            if ($row->expired_at) {
                $table_body .= '<br><b>Expire at:</b> ' . \date('M d, Y', (int) $row->expired_at);
            }
            $siteKey = \base64_encode("{$site_url}\n{$site_name}\n!kokoro:{$row->license_key}");
            $table_body .= \sprintf('<br><b>SiteKey:</b> <code>%s</code>', $siteKey);
            $table_body .= '<br><br>';
        }
        $email_template = <<<HTML
    <table width="100%" style="width: 100%; vertical-align: top; margin-bottom: 40px; padding: 0;" border="0" cellpadding="0" cellspacing="0">
        <tbody>
            <tr>
                <td align="left" style="text-align: left; border: 0; padding: 0;" valign="top">
                    <h2 style="color: #7f54b3; display: block; font-size: 18px; font-weight: bold; line-height: 130%; margin: 0 0 18px; text-align: left;">Yabe Kokoro License</h2>
                    <div style="padding: 12px; color: #636363; border: 1px solid #e5e5e5;" >
                        {$table_body}
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
HTML;
        echo $email_template;
    }
}
