/**
 * Created by marclaughton on 02/22/16.
 */


// Main
function chunk(arr, size) {
  'use strict';

  var chunkedArr = [];

  // Loop over elements in array
  for (var i = 0, ii = arr.length; i < ii; i++) {
    // If size is present, do something
    if (size) {
        // Slice array where end of slice args is i + size
        // Size + i also must also be divisible by size
        // console.log((i + size) % size === 0);
        if ((i + size) % size === 0) {
          chunkedArr.push(arr.slice(i, (i + size)));
        }
    }
  }
  return chunkedArr;
}

// Test
var result = chunk(["a", "b", "c", "d"], 2);
console.log(result);

// Cases
// chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
