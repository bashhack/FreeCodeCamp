/**
 * Created by marclaughton on 1/31/16.
 */


// Main
function findLongestWord(str) {
    'use strict';

    // Init
    var max = null;

    // Create array
    str = str.split(' ');

    // Iterate and find length
    for (var i = 0; i < str.length; i++) {
        if (max < str[i].length) {
            // Assign max to longest string
            max = str[i].length;
        }
    }

    return max;
}

// Test
var result = findLongestWord('What is the average airspeed velocity of an unladen swallow');
console.log(result);

// Cases
// findLongestWord(str) should return an int
// findLongestWord('Google do a barrel roll') should return 6
// findLongestWord('What is the average airspeed velocity of an unladen swallow') should return 8
