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

use WooCommerce;
use Yabe\Kokoro\Ecommerce\PlatformInterface;
use Yabe\Kokoro\Utils\Config;
/**
 * @since 1.0.0
 */
class Commerce implements PlatformInterface
{
    public function __construct()
    {
        if (!\class_exists(WooCommerce::class)) {
            return;
        }
        if (!Config::get('ecommerce.woocommerce.enable_integration', \false)) {
            return;
        }
        new \Yabe\Kokoro\Ecommerce\Platform\WooCommerce\Metabox();
        new \Yabe\Kokoro\Ecommerce\Platform\WooCommerce\Payment();
        new \Yabe\Kokoro\Ecommerce\Platform\WooCommerce\Email();
        new \Yabe\Kokoro\Ecommerce\Platform\WooCommerce\ReceiptBlock();
    }
    public function get_name() : string
    {
        return 'woocommerce';
    }
}
