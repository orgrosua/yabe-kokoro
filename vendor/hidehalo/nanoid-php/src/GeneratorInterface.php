<?php

namespace _YabeKokoro\Hidehalo\Nanoid;

interface GeneratorInterface
{
    /**
     * Return random bytes array
     *
     * @param integer $size
     * @return array
     */
    public function random($size);
}
