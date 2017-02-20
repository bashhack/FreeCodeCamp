/**
 * Created by marclaughton on 08/15/16.
 */


// Main
function slasher(arr, howMany) {
  return arr.slice(howMany, arr.length);
}

// Test
var result = slasher([1, 2, 3], 2);
console.log(result);

// Cases
// slasher([1, 2, 3], 2) should return [3].
// slasher([1, 2, 3], 0) should return [1, 2, 3].
// slasher([1, 2, 3], 9) should return [].
// slasher([1, 2, 3], 4) should return [].
// slasher(["burgers", "fries", "shake"], 1) should return ["fries", "shake"].
// slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5) should return ["cheese", 4].
