/**
 * Created by marclaughton on 10/23/16.
 */


// Main
// jshint esversion: 6

const destroyer = (arr, ...args) =>
  arr.filter((x, i, a) => args.indexOf(x) === -1)

// Test
var result = destroyer(["tree", "hamburger", 53], "tree", 53)
console.log(result);

// Cases
// destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
// destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
// destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
// destroyer([2, 3, 2, 3], 2, 3) should return [].
// destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
