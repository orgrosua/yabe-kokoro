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
namespace Yabe\Kokoro;

use _YabeKokoro\KOKORO;
use _YabeKokoro\Rosua\Migrations\Migrator;
/**
 * Manage the plugin custom database tables.
 *
 * @author Joshua Gugun Siagian <suabahasa@gmail.com>
 */
final class Migration
{
    private Migrator $migrator;
    public function __construct()
    {
        $this->migrator = new Migrator(['tableName' => 'kokoro_migrations', 'namespace' => 'Yabe\\Kokoro\\Migrations', 'directory' => 'migrations', 'basePath' => \dirname(KOKORO::FILE), 'commandNamespace' => 'kokoro migrations']);
        \add_action('a!yabe/kokoro/plugin:activate_plugin.start', fn() => $this->install());
        \add_action('a!yabe/kokoro/plugin:upgrade_plugin.start', fn() => $this->upgrade());
        $this->migrator->boot();
    }
    public function install()
    {
        $this->migrator->install();
        $this->migrator->execute();
    }
    public function upgrade()
    {
        $this->migrator->install();
        $this->migrator->execute();
    }
}
