/**
 * Created by marclaughton on 09/18/15.
 */


// Main
function largestOfFour(arr) {
    'use strict';

    var i = 0,
        ii = arr.length,
        j = 0,
        k = 0,
        max = 0,
        resArray = [];

    for (i; i < ii; i += 1) {
        //console.log(arr[i]); // [4, 5, 1, 3], [13, 27, 18, 26], etc.

        j = 0;
        max = 0;

        for (j, k = arr[i].length; j < k; j += 1) {
            //console.log(arr[i][j]); // 4, 5, 1, 3

            if (max < arr[i][j]) {

                max = arr[i][j];
            }
        }
        resArray.push(max);
    }
    return resArray;
}

// Test
var result = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]], "");
console.log(result);

// Cases
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.
// largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27,5,39,1001].
// largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].
