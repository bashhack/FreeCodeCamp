/**
 * Created by marclaughton on 10/23/16.
 */


// Main
// jshint esversion: 6

const getIndexToIns = (arr, num) =>
  (arr.concat(num)).reduce(
    (memoized, curr) =>
      memoized.concat(curr).sort((a, b) => a - b),
      []
  ).indexOf(num);

// Test
var result = getIndexToIns([10, 20, 30, 40, 50], 35);
console.log(result);

// Cases
// getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
// getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
// getIndexToIns([40, 60], 50) should return 1.
// getIndexToIns([3, 10, 5], 3) should return 0.
// getIndexToIns([5, 3, 20, 3], 5) should return 2.
// getIndexToIns([2, 20, 10], 19) should return 2.
// getIndexToIns([2, 5, 10], 15) should return 3.
