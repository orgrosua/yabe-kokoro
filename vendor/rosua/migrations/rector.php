<?php

declare (strict_types=1);
namespace _YabeKokoro;

use _YabeKokoro\Rector\Config\RectorConfig;
use _YabeKokoro\Rector\Php74\Rector\Property\TypedPropertyRector;
use _YabeKokoro\Rector\Set\ValueObject\LevelSetList;
use _YabeKokoro\Rector\Set\ValueObject\SetList;
use _YabeKokoro\Rector\Set\ValueObject\DowngradeLevelSetList;
return static function (RectorConfig $rectorConfig) : void {
    $rectorConfig->paths([__DIR__ . '/src']);
    // define sets of rules
    $rectorConfig->sets([SetList::NAMING, SetList::CODE_QUALITY, SetList::CODING_STYLE, DowngradeLevelSetList::DOWN_TO_PHP_74, LevelSetList::UP_TO_PHP_74]);
    // register single rule
    $rectorConfig->rule(TypedPropertyRector::class);
};
