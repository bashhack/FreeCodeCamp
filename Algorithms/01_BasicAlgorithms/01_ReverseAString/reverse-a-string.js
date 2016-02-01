/**
 * Created by marclaughton on 11/8/15.
 */


// Main
function reverseString(str) {
    'use strict';

    return str.split('').reverse().join('');
}

// Test
var result = reverseString('hello');
console.log(result);

// Cases
//reverseString() should return a string.
//reverseString("hello") should become "olleh".
//reverseString("Howdy") should become "ydwoH".
//reverseString("Greetings from Earth") should return "htraE morf sgniteerG".