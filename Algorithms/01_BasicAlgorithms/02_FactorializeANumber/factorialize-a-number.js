/**
 * Created by marclaughton on 11/8/15.
 */


// Main
function factorialize(num) {
    'use strict';

    // Handle exceptions
    if (num < 0) {
        return -1;
    } else if (num === 0) {
        return 1;
    } else {
        // Process valid input
        return (num * factorialize(num - 1));
    }
}

// Test
var result = factorialize(5);
console.log(result);

// Cases
//factorialize() should return a number.
//factorialize(5) should return 120.
//factorialize(10) should return 3628800.
//factorialize(20) should return 2432902008176640000.
//factorialize(0) should return 1.