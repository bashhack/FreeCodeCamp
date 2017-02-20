/**
 * Created by marclaughton on 09/01/15.
 */


// Main
function repeat(str, num) {
    'use strict';

    // NOTE: In ECMAScript 6 Specs, below is valid
    /* str.repeat(num); */

    var newStr = '';

    while (num-- > 0) {
        newStr += str;
    }

    return newStr;
}

// Test
var result = repeat('abc', 3);
console.log(result);

// Cases
// repeatStringNumTimes("*", 3) should return "***".
// repeatStringNumTimes("abc", 3) should return "abcabcabc".
// repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
// repeatStringNumTimes("abc", 1) should return "abc".
// repeatStringNumTimes("*", 8) should return "********".
// repeatStringNumTimes("abc", -2) should return "".
