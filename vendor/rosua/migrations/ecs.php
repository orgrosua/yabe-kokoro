<?php

namespace _YabeKokoro;

use _YabeKokoro\Symplify\EasyCodingStandard\Config\ECSConfig;
use _YabeKokoro\Symplify\EasyCodingStandard\ValueObject\Set\SetList;
return static function (ECSConfig $ecsConfig) : void {
    $ecsConfig->paths([__DIR__ . '/plugin.php', __DIR__ . '/src']);
    $ecsConfig->sets([SetList::CLEAN_CODE, SetList::COMMON, SetList::PSR_12]);
};
