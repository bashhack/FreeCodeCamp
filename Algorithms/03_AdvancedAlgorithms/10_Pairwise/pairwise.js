/**
 * Created by marclaughton on 09/20/15.
 */


// Main
function pairwise(arr, arg) {
    'use strict';

    // Init
    var idxArr = [],
        position1,
        ii = arr.length,
        position2,
        jj = arr.length,
        firstVal,
        secondVal,
        sum;

    // Store values at indexes
    for (position1 = 0; position1 < ii; position1 += 1) {

        firstVal = arr[position1];

        for (position2 = 1; position2 < jj; position2 += 1) {

            secondVal = arr[position2];

            /**
             * Sum and check against arg param,
             * ensure position markers are not already in idxArr
             */
            if (firstVal + secondVal === arg &&
                    position2 > position1 &&
                    idxArr.indexOf(position1) === -1 &&
                    idxArr.indexOf(position2) === -1) {

                idxArr.push(position1, position2);
                break;
            }

            console.log(idxArr);
        }
    }

    if (idxArr.length) {
        sum = function (a, b) {
            return a + b;
        };

        return idxArr.reduce(sum);
    }

    return 0;
}

// Test
var test = pairwise([1,4,2,3,0,5], 7);
console.log(test);

// Cases
// pairwise([1, 4, 2, 3, 0, 5], 7) should return 11.
// pairwise([1, 3, 2, 4], 4) should return 1.
// pairwise([1, 1, 1], 2) should return 1.
// pairwise([0, 0, 0, 0, 1, 1], 1) should return 10.
// pairwise([], 100) should return 0.
