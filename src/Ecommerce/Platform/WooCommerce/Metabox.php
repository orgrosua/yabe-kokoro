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

use _YabeKokoro\KOKORO;
use WP_Post;
/**
 * @since 1.0.0
 */
class Metabox
{
    public function __construct()
    {
        \add_action('add_meta_boxes', fn() => $this->register_metabox(), 1000001);
        \add_action('save_post', fn(int $postId) => $this->save_post($postId), 1000001);
    }
    public function register_metabox() : void
    {
        \add_meta_box('kokoro_metabox_wc', 'Yabe Kokoro', fn(WP_Post $wpPost) => $this->render_metabox($wpPost), 'product', 'side', 'default');
    }
    public function save_post(int $postId) : void
    {
        if (!\array_key_exists('post_type', $_POST) || $_POST['post_type'] !== 'product' || !\array_key_exists('kokoro_wpnonce', $_POST) || !\wp_verify_nonce(\sanitize_text_field(\wp_unslash($_POST['kokoro_wpnonce'])), KOKORO::WP_OPTION)) {
            return;
        }
        \update_post_meta($postId, 'kokoro_should_generate', (int) \array_key_exists('kokoro_should_generate', $_POST));
        \update_post_meta($postId, 'kokoro_should_renewal', (int) \array_key_exists('kokoro_should_renewal', $_POST));
        \update_post_meta($postId, 'kokoro_max_sites', (int) isset($_POST['kokoro_max_sites']) && $_POST['kokoro_max_sites'] > 0 ? $_POST['kokoro_max_sites'] : 0);
        \update_post_meta($postId, 'kokoro_active_duration', (int) isset($_POST['kokoro_active_duration']) && $_POST['kokoro_active_duration'] > 0 ? $_POST['kokoro_active_duration'] : 0);
    }
    private function render_metabox(WP_Post $wpPost) : void
    {
        $nonce_field = \wp_nonce_field(KOKORO::WP_OPTION, 'kokoro_wpnonce', \false, \false);
        $should_generate = \get_post_meta($wpPost->ID, 'kokoro_should_generate', \true) ? 'checked' : '';
        $should_renewal = \get_post_meta($wpPost->ID, 'kokoro_should_renewal', \true) ? 'checked' : '';
        $max_sites = (int) \get_post_meta($wpPost->ID, 'kokoro_max_sites', \true);
        $active_duration = (int) \get_post_meta($wpPost->ID, 'kokoro_active_duration', \true);
        ?>
        
            <div class="kokoro-container">
                <?php 
        $nonce_field;
        ?>
                <div>
                    <p><strong>Generate?</strong></p>
                    <label for="kokoro_should_generate">
                        <input type="checkbox" name="kokoro_should_generate" id="kokoro_should_generate" <?php 
        $should_generate;
        ?>>
                        Generate the license automatically
                    </label>
                </div>

                <div>
                    <p><strong>Renewal?</strong></p>
                    <label for="kokoro_should_renewal">
                        <input type="checkbox" name="kokoro_should_renewal" id="kokoro_should_renewal" <?php 
        $should_renewal;
        ?>>
                        Allow license renewal
                        <span class="dashicons dashicons-editor-help" title="Extend the expiry date for the existing license for the renewal order."></span>
                    </label>
                </div>

                <div>
                    <p>
                        <strong>Max Activations</strong>
                        <span class="dashicons dashicons-editor-help" title="Keep empty or 0 to allow unlimited activations."></span>
                    </p>
                    <input type="number" name="kokoro_max_sites" id="kokoro_max_sites" value="<?php 
        $max_sites;
        ?>" min="0">
                </div>

                <div>
                    <p>
                        <strong>Duration</strong>
                        <span class="dashicons dashicons-editor-help" title="The duration of the license is in days. Keep empty or 0 to have no expiration date."></span>
                    </p>
                    <div>
                        <input type="number" name="kokoro_active_duration" id="kokoro_active_duration" value="<?php 
        $active_duration;
        ?>" min="0">
                         days
                    </div>
                    </label>
                </div>
            </div>

            <style>
                .kokoro-container {
                    display: grid;
                    grid-template-columns: repeat(1, 1fr);
                    gap: 10px;
                }

                #kokoro_max_sites,
                #kokoro_active_duration {
                    max-width: 100%;
                }

                /* revert Oxygen style */
                #editor .postbox > .postbox-header:hover {
                    background: transparent !important;
                }
            </style>
        
        <?php 
    }
}
