/**
 * Created by marclaughton on 1/31/16.
 */


// Main
function palindrome(str) {
    'use strict';

    // Init
    var rev_str = null;

    // Sanitize input(s)
    str = str.replace(/[\W_]/g, '').toLowerCase();

    // Reverse the sanitzed string
    rev_str = str.split('').reverse().join('');

    // Compare, return as boolean
    return str === rev_str;
}

// Test
var result = palindrome('eye');
console.log(result);

// Cases
// palindrome() should return a boolean
// palindrome('eye') should return true
// palindrome('not a palindrome') should return false
// palindrome('My age is 0, 0 si ega ym.') should return true
