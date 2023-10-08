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
/**
 * @since 1.0.0
 */
class ReceiptBlock
{
    public function __construct()
    {
        /**
         * @package WooCommerce
         * @link https://woocommerce.github.io/code-reference/files/woocommerce-templates-order-order-details.html
         */
        \add_action('woocommerce_order_details_after_order_table', fn(WC_Abstract_Order $wcAbstractOrder) => $this->payment_receipt_after_table($wcAbstractOrder), 1000001, 1);
    }
    private function payment_receipt_after_table(WC_Abstract_Order $wcAbstractOrder) : void
    {
        if (!Config::get('ecommerce.woocommerce.print_purchase_page', \false)) {
            return;
        }
        if (!$wcAbstractOrder) {
            return;
        }
        if (!$this->is_order_complete($wcAbstractOrder->get_id())) {
            return;
        }
        $table_body = '';
        $row_template = <<<HTML
    <tbody>
        <tr>
            <td class="yabe-kokoro_cel_name">
                <span class="yabe-kokoro_name">%s</span>
            </td>
            <td class="yabe-kokoro_cel_status">
                <span class="yabe-kokoro_status">%s</span>
            </td>
            <td class="yabe-kokoro_cel_activation">
                <span class="yabe-kokoro_activation">%s</span>
            </td>
            <td class="yabe-kokoro_cel_expire">
                <span class="yabe-kokoro_expire">%s</span>
            </td>
            <td class="yabe-kokoro_cel_sitekey">
                <span class="yabe-kokoro_sitekey"><code>%s</code></span>
            </td>
        </tr>
    </tbody>
HTML;
        /** @var wpdb $wpdb */
        global $wpdb;
        $sql = "\n            SELECT *\n            FROM {$wpdb->prefix}{$wpdb->yabe_kokoro_prefix}_orders o\n            WHERE \n                o.vendor = 'woocommerce'\n                AND o.order_id = %d\n        ";
        $sql = $wpdb->prepare($sql, (int) $wcAbstractOrder->get_id());
        $licenseOrders = $wpdb->get_results($sql);
        $site_url = \get_site_url();
        $site_name = \get_bloginfo('name');
        foreach ($licenseOrders as $licenseOrder) {
            $sql = "\n                SELECT \n                    l.*,\n                    COUNT(s.id) AS sites_count\n                FROM {$wpdb->prefix}{$wpdb->yabe_kokoro_prefix}_licenses l\n                LEFT JOIN {$wpdb->prefix}{$wpdb->yabe_kokoro_prefix}_sites s ON s.license_id = l.id\n                WHERE l.id = %d\n                GROUP BY l.id\n            ";
            $sql = $wpdb->prepare($sql, $licenseOrder->license_id);
            $row = $wpdb->get_row($sql);
            if (!$row) {
                continue;
            }
            $max_sites = $row->max_sites ?: \__('Unlimited', 'yabe-kokoro');
            $total_activation = $row->sites_count;
            $table_body .= \sprintf($row_template, \esc_html(\get_post($licenseOrder->product_id)->post_title), $row->status ? 'Active' : 'Deactive', \esc_html($total_activation . ' / ' . $max_sites), $row->expired_at ? \date('M d, Y', (int) $row->expired_at) : '', \base64_encode("{$site_url}\n{$site_name}\n!kokoro:{$row->license_key}"));
        }
        $template = <<<HTML
    <h3>%s</h3>
    <table id="yabe-kokoro_receipt" class="yabe-kokoro_receipt">
        <thead>
            <tr>
                <th class="yabe-kokoro_header_name">%s</th>
                <th>%s</th>
                <th>%s</th>
                <th>%s</th>
                <th>%s</th>
            </tr>
        </thead>
        {$table_body}
    </table>
HTML;
        $output = \sprintf($template, \__('Yabe Kokoro License', 'yabe-kokoro'), \__('Product', 'yabe-kokoro'), \__('Status', 'yabe-kokoro'), \__('Activation', 'yabe-kokoro'), \__('Expired at', 'yabe-kokoro'), \__('SiteKey', 'yabe-kokoro'));
        $output .= <<<'HTML'
    <style>
        .yabe-kokoro_receipt {
            width: 100%;
            table-layout: auto;
        }

        .yabe-kokoro_receipt .yabe-kokoro_header_name {
            text-align: left;
        }

        .yabe-kokoro_receipt .yabe-kokoro_cel_status,
        .yabe-kokoro_receipt .yabe-kokoro_cel_activation,
        .yabe-kokoro_receipt .yabe-kokoro_cel_expire {
            text-align: center;
        }

        .yabe-kokoro_receipt .yabe-kokoro_cel_sitekey {
            overflow-wrap: anywhere;
        }
    </style>
HTML;
        echo $output;
    }
    private function is_order_complete(int $post_id) : bool
    {
        return (bool) \get_post_meta($post_id, 'kokoro_order_complete', \true);
    }
}
