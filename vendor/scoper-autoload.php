<?php

// scoper-autoload.php @generated by PhpScoper

// Backup the autoloaded Composer files
if (isset($GLOBALS['__composer_autoload_files'])) {
    $existingComposerAutoloadFiles = $GLOBALS['__composer_autoload_files'];
}

$loader = require_once __DIR__.'/autoload.php';
// Ensure InstalledVersions is available
$installedVersionsPath = __DIR__.'/composer/InstalledVersions.php';
if (file_exists($installedVersionsPath)) require_once $installedVersionsPath;

// Restore the backup
if (isset($existingComposerAutoloadFiles)) {
    $GLOBALS['__composer_autoload_files'] = $existingComposerAutoloadFiles;
} else {
    unset($GLOBALS['__composer_autoload_files']);
}

// Class aliases. For more information see:
// https://github.com/humbug/php-scoper/blob/master/docs/further-reading.md#class-aliases
if (!function_exists('humbug_phpscoper_expose_class')) {
    function humbug_phpscoper_expose_class(string $exposed, string $prefixed): void {
        if (!class_exists($exposed, false) && !interface_exists($exposed, false) && !trait_exists($exposed, false)) {
            spl_autoload_call($prefixed);
        }
    }
}
humbug_phpscoper_expose_class('KOKORO', '_YabeKokoro\KOKORO');
humbug_phpscoper_expose_class('Normalizer', '_YabeKokoro\Normalizer');
humbug_phpscoper_expose_class('Attribute', '_YabeKokoro\Attribute');
humbug_phpscoper_expose_class('PhpToken', '_YabeKokoro\PhpToken');
humbug_phpscoper_expose_class('Stringable', '_YabeKokoro\Stringable');
humbug_phpscoper_expose_class('UnhandledMatchError', '_YabeKokoro\UnhandledMatchError');
humbug_phpscoper_expose_class('ValueError', '_YabeKokoro\ValueError');

// Function aliases. For more information see:
// https://github.com/humbug/php-scoper/blob/master/docs/further-reading.md#function-aliases
if (!function_exists('ctype_alnum')) { function ctype_alnum() { return \_YabeKokoro\ctype_alnum(...func_get_args()); } }
if (!function_exists('ctype_alpha')) { function ctype_alpha() { return \_YabeKokoro\ctype_alpha(...func_get_args()); } }
if (!function_exists('ctype_cntrl')) { function ctype_cntrl() { return \_YabeKokoro\ctype_cntrl(...func_get_args()); } }
if (!function_exists('ctype_digit')) { function ctype_digit() { return \_YabeKokoro\ctype_digit(...func_get_args()); } }
if (!function_exists('ctype_graph')) { function ctype_graph() { return \_YabeKokoro\ctype_graph(...func_get_args()); } }
if (!function_exists('ctype_lower')) { function ctype_lower() { return \_YabeKokoro\ctype_lower(...func_get_args()); } }
if (!function_exists('ctype_print')) { function ctype_print() { return \_YabeKokoro\ctype_print(...func_get_args()); } }
if (!function_exists('ctype_punct')) { function ctype_punct() { return \_YabeKokoro\ctype_punct(...func_get_args()); } }
if (!function_exists('ctype_space')) { function ctype_space() { return \_YabeKokoro\ctype_space(...func_get_args()); } }
if (!function_exists('ctype_upper')) { function ctype_upper() { return \_YabeKokoro\ctype_upper(...func_get_args()); } }
if (!function_exists('ctype_xdigit')) { function ctype_xdigit() { return \_YabeKokoro\ctype_xdigit(...func_get_args()); } }
if (!function_exists('fdiv')) { function fdiv() { return \_YabeKokoro\fdiv(...func_get_args()); } }
if (!function_exists('get_debug_type')) { function get_debug_type() { return \_YabeKokoro\get_debug_type(...func_get_args()); } }
if (!function_exists('get_resource_id')) { function get_resource_id() { return \_YabeKokoro\get_resource_id(...func_get_args()); } }
if (!function_exists('grapheme_extract')) { function grapheme_extract() { return \_YabeKokoro\grapheme_extract(...func_get_args()); } }
if (!function_exists('grapheme_stripos')) { function grapheme_stripos() { return \_YabeKokoro\grapheme_stripos(...func_get_args()); } }
if (!function_exists('grapheme_stristr')) { function grapheme_stristr() { return \_YabeKokoro\grapheme_stristr(...func_get_args()); } }
if (!function_exists('grapheme_strlen')) { function grapheme_strlen() { return \_YabeKokoro\grapheme_strlen(...func_get_args()); } }
if (!function_exists('grapheme_strpos')) { function grapheme_strpos() { return \_YabeKokoro\grapheme_strpos(...func_get_args()); } }
if (!function_exists('grapheme_strripos')) { function grapheme_strripos() { return \_YabeKokoro\grapheme_strripos(...func_get_args()); } }
if (!function_exists('grapheme_strrpos')) { function grapheme_strrpos() { return \_YabeKokoro\grapheme_strrpos(...func_get_args()); } }
if (!function_exists('grapheme_strstr')) { function grapheme_strstr() { return \_YabeKokoro\grapheme_strstr(...func_get_args()); } }
if (!function_exists('grapheme_substr')) { function grapheme_substr() { return \_YabeKokoro\grapheme_substr(...func_get_args()); } }
if (!function_exists('mb_check_encoding')) { function mb_check_encoding() { return \_YabeKokoro\mb_check_encoding(...func_get_args()); } }
if (!function_exists('mb_chr')) { function mb_chr() { return \_YabeKokoro\mb_chr(...func_get_args()); } }
if (!function_exists('mb_convert_case')) { function mb_convert_case() { return \_YabeKokoro\mb_convert_case(...func_get_args()); } }
if (!function_exists('mb_convert_encoding')) { function mb_convert_encoding() { return \_YabeKokoro\mb_convert_encoding(...func_get_args()); } }
if (!function_exists('mb_convert_variables')) { function mb_convert_variables() { return \_YabeKokoro\mb_convert_variables(...func_get_args()); } }
if (!function_exists('mb_decode_mimeheader')) { function mb_decode_mimeheader() { return \_YabeKokoro\mb_decode_mimeheader(...func_get_args()); } }
if (!function_exists('mb_decode_numericentity')) { function mb_decode_numericentity() { return \_YabeKokoro\mb_decode_numericentity(...func_get_args()); } }
if (!function_exists('mb_detect_encoding')) { function mb_detect_encoding() { return \_YabeKokoro\mb_detect_encoding(...func_get_args()); } }
if (!function_exists('mb_detect_order')) { function mb_detect_order() { return \_YabeKokoro\mb_detect_order(...func_get_args()); } }
if (!function_exists('mb_encode_mimeheader')) { function mb_encode_mimeheader() { return \_YabeKokoro\mb_encode_mimeheader(...func_get_args()); } }
if (!function_exists('mb_encode_numericentity')) { function mb_encode_numericentity() { return \_YabeKokoro\mb_encode_numericentity(...func_get_args()); } }
if (!function_exists('mb_encoding_aliases')) { function mb_encoding_aliases() { return \_YabeKokoro\mb_encoding_aliases(...func_get_args()); } }
if (!function_exists('mb_get_info')) { function mb_get_info() { return \_YabeKokoro\mb_get_info(...func_get_args()); } }
if (!function_exists('mb_http_input')) { function mb_http_input() { return \_YabeKokoro\mb_http_input(...func_get_args()); } }
if (!function_exists('mb_http_output')) { function mb_http_output() { return \_YabeKokoro\mb_http_output(...func_get_args()); } }
if (!function_exists('mb_internal_encoding')) { function mb_internal_encoding() { return \_YabeKokoro\mb_internal_encoding(...func_get_args()); } }
if (!function_exists('mb_language')) { function mb_language() { return \_YabeKokoro\mb_language(...func_get_args()); } }
if (!function_exists('mb_list_encodings')) { function mb_list_encodings() { return \_YabeKokoro\mb_list_encodings(...func_get_args()); } }
if (!function_exists('mb_ord')) { function mb_ord() { return \_YabeKokoro\mb_ord(...func_get_args()); } }
if (!function_exists('mb_output_handler')) { function mb_output_handler() { return \_YabeKokoro\mb_output_handler(...func_get_args()); } }
if (!function_exists('mb_parse_str')) { function mb_parse_str() { return \_YabeKokoro\mb_parse_str(...func_get_args()); } }
if (!function_exists('mb_scrub')) { function mb_scrub() { return \_YabeKokoro\mb_scrub(...func_get_args()); } }
if (!function_exists('mb_str_split')) { function mb_str_split() { return \_YabeKokoro\mb_str_split(...func_get_args()); } }
if (!function_exists('mb_stripos')) { function mb_stripos() { return \_YabeKokoro\mb_stripos(...func_get_args()); } }
if (!function_exists('mb_stristr')) { function mb_stristr() { return \_YabeKokoro\mb_stristr(...func_get_args()); } }
if (!function_exists('mb_strlen')) { function mb_strlen() { return \_YabeKokoro\mb_strlen(...func_get_args()); } }
if (!function_exists('mb_strpos')) { function mb_strpos() { return \_YabeKokoro\mb_strpos(...func_get_args()); } }
if (!function_exists('mb_strrchr')) { function mb_strrchr() { return \_YabeKokoro\mb_strrchr(...func_get_args()); } }
if (!function_exists('mb_strrichr')) { function mb_strrichr() { return \_YabeKokoro\mb_strrichr(...func_get_args()); } }
if (!function_exists('mb_strripos')) { function mb_strripos() { return \_YabeKokoro\mb_strripos(...func_get_args()); } }
if (!function_exists('mb_strrpos')) { function mb_strrpos() { return \_YabeKokoro\mb_strrpos(...func_get_args()); } }
if (!function_exists('mb_strstr')) { function mb_strstr() { return \_YabeKokoro\mb_strstr(...func_get_args()); } }
if (!function_exists('mb_strtolower')) { function mb_strtolower() { return \_YabeKokoro\mb_strtolower(...func_get_args()); } }
if (!function_exists('mb_strtoupper')) { function mb_strtoupper() { return \_YabeKokoro\mb_strtoupper(...func_get_args()); } }
if (!function_exists('mb_strwidth')) { function mb_strwidth() { return \_YabeKokoro\mb_strwidth(...func_get_args()); } }
if (!function_exists('mb_substitute_character')) { function mb_substitute_character() { return \_YabeKokoro\mb_substitute_character(...func_get_args()); } }
if (!function_exists('mb_substr')) { function mb_substr() { return \_YabeKokoro\mb_substr(...func_get_args()); } }
if (!function_exists('mb_substr_count')) { function mb_substr_count() { return \_YabeKokoro\mb_substr_count(...func_get_args()); } }
if (!function_exists('normalizer_is_normalized')) { function normalizer_is_normalized() { return \_YabeKokoro\normalizer_is_normalized(...func_get_args()); } }
if (!function_exists('normalizer_normalize')) { function normalizer_normalize() { return \_YabeKokoro\normalizer_normalize(...func_get_args()); } }
if (!function_exists('preg_last_error_msg')) { function preg_last_error_msg() { return \_YabeKokoro\preg_last_error_msg(...func_get_args()); } }
if (!function_exists('str_contains')) { function str_contains() { return \_YabeKokoro\str_contains(...func_get_args()); } }
if (!function_exists('str_ends_with')) { function str_ends_with() { return \_YabeKokoro\str_ends_with(...func_get_args()); } }
if (!function_exists('str_starts_with')) { function str_starts_with() { return \_YabeKokoro\str_starts_with(...func_get_args()); } }

return $loader;
