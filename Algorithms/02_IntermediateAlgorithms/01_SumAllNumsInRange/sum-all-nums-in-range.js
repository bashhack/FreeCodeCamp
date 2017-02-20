/**
 * Created by marclaughton on 10/23/16.
 */


// Main
// jshint esversion: 6

const sumAll = (arr) =>
  arr.sort((a, b) => a - b).reduce(
    (memoized, curr) =>
      ((memoized + curr) * (curr - memoized + 1) / 2)
  );

// Test
var result = sumAll([10, 5]);
console.log(result);

// Cases
// sumAll([1, 4]) should return a number.
// sumAll([1, 4]) should return 10.
// sumAll([4, 1]) should return 10.
// sumAll([5, 10]) should return 45.
// sumAll([10, 5]) should return 45.
