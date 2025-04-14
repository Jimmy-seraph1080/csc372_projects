<?php
// validates that a text string is within a specific character length range 
// the function parameters take the following:
// $text - the string to validate
// $min - the minimum number of characters allowed
// $max - the maximum number of characters allowed
// returns true if valid, false otherwise
function validate_text_length($text, $min, $max) {
    $length = strlen($text);
    return $length >= $min && $length <= $max;
}
// validates that a number is numeric and within a specific numeric range
// the function parameters take the following:
// $num - the number to validate
// $min - minimum acceptable value
// $max - maximum acceptable value
// returns true if valid, false otherwise
function validate_number_range($num, $min, $max) {
    return is_numeric($num) && $num >= $min && $num <= $max;
}
// validates that a selected option is one of the allowed valid options
// the function parameters take the following:
// $selected- the value chosen by the user
// $valid_options- an array of allowed values
// returns true if the selected value is found in the list of valid options
function validate_option($selected, $valid_options) {
    return in_array($selected, $valid_options);
}
?>

