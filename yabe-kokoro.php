<?php

/**
 * Yabe Kokoro - Oxygen design sets manager
 *
 * @wordpress-plugin
 * Plugin Name:         Yabe Kokoro
 * Plugin URI:          https://kokoro.yabe.land
 * Description:         Oxygen design sets manager
 * Version:             1.0.4
 * Requires at least:   6.0
 * Requires PHP:        7.4
 * Author:              Rosua
 * Author URI:          https://rosua.org
 * Donate link:         https://ko-fi.com/Q5Q75XSF7
 * Text Domain:         yabe-kokoro
 * Domain Path:         /languages
 *
 * @package             Yabe
 * @author              Joshua Gugun Siagian <suabahasa@gmail.com>
 */
declare (strict_types=1);
namespace _YabeKokoro;

use Yabe\Kokoro\Plugin;
use Yabe\Kokoro\Utils\Requirement;
\defined('ABSPATH') || exit;
if (\file_exists(__DIR__ . '/vendor/scoper-autoload.php')) {
    require_once __DIR__ . '/vendor/scoper-autoload.php';
} else {
    require_once __DIR__ . '/vendor/autoload.php';
}
$requirement = new Requirement();
$requirement->php('7.4')->wp('6.0')->plugins(['oxygen/functions.php' => '4.0']);
if ($requirement->met()) {
    Plugin::get_instance()->boot();
} else {
    \add_action('admin_notices', fn() => $requirement->printNotice(), 0, 0);
}
