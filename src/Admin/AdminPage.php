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
namespace Yabe\Kokoro\Admin;

use _YabeKokoro\EDD_SL\PluginUpdater;
use Yabe\Kokoro\Ecommerce\Loader as PlatformLoader;
use Yabe\Kokoro\Utils\Asset;
use _YabeKokoro\YABE_KOKORO;
class AdminPage
{
    public function __construct()
    {
        \add_action('admin_menu', fn() => $this->add_admin_menu(), 1000001);
    }
    public static function get_page_url() : string
    {
        return \add_query_arg(['page' => YABE_KOKORO::WP_OPTION], \admin_url('admin.php'));
    }
    public function add_admin_menu()
    {
        $hook = \add_submenu_page('ct_dashboard_page', \__('Yabe Kokoro', 'yabe-kokoro'), \__('Yabe Kokoro', 'yabe-kokoro'), 'manage_options', YABE_KOKORO::WP_OPTION, fn() => $this->render(), 1000001);
        \add_action('load-' . $hook, fn() => $this->init_hooks());
    }
    private function render()
    {
        \add_filter('admin_footer_text', static fn($text) => 'Thank you for using <b>Kokoro</b>! Join us on the <a href="https://www.facebook.com/groups/1142662969627943" target="_blank">Facebook Group</a>.', 1000001);
        \add_filter('update_footer', static fn($text) => $text . ' | Kokoro ' . YABE_KOKORO::VERSION, 1000001);
        echo '<div id="kokoro-app" class=""></div>';
    }
    private function init_hooks()
    {
        \add_action('admin_enqueue_scripts', fn() => $this->enqueue_scripts(), 1000001);
    }
    private function enqueue_scripts()
    {
        Asset::enqueue_entry('admin', [], \true);
        \wp_set_script_translations(YABE_KOKORO::WP_OPTION . ':admin.js', 'yabe-kokoro');
        \wp_localize_script(YABE_KOKORO::WP_OPTION . ':admin.js', 'kokoro', ['_version' => YABE_KOKORO::VERSION, '_wpnonce' => \wp_create_nonce(YABE_KOKORO::WP_OPTION), 'web_history' => self::get_page_url(), 'rest_api' => ['nonce' => \wp_create_nonce('wp_rest'), 'root' => \esc_url_raw(\rest_url()), 'namespace' => YABE_KOKORO::REST_NAMESPACE, 'url' => \esc_url_raw(\rest_url(YABE_KOKORO::REST_NAMESPACE))], 'assets' => ['url' => Asset::asset_base_url()], 'site_meta' => ['name' => \get_bloginfo('name'), 'site_url' => \get_site_url()], 'lite_edition' => !\class_exists(PluginUpdater::class), 'ecommerce' => ['platforms' => \array_keys(PlatformLoader::get_instance()->get_platforms())]]);
    }
}
