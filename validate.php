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
// validates that a date that user input 
// the function parameters take the following:
// $year - user's input year
// return true if it is a valid date
function validate_birth_year($year) {
    return is_numeric($year) && $year > 1900 && $year <= date('Y');
}
// validates that a email that user input 
// the function parameters take the following:
// $email - user's inputted email
// return true if it is a valid date
function validate_email($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}