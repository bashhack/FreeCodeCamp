/**
 * Created by marclaughton on 08/15/16.
 */


// Main
function mutation(arr) {

  var strToLowerCase = function (arr) {
    return arr.split('').map(function (x) {
      return x.toLowerCase();
    });
  },
      wordToCheck = strToLowerCase(arr[0]).join(''),
      second = strToLowerCase(arr[1]),
      diffCount = 0;

  second.forEach(function (letter) {
    if (wordToCheck.indexOf(letter) === -1) {
      diffCount += 1;
    }
  });
  return diffCount === 0 ? true : false;
}

// Test
var result = mutation(["hello", "hey"]);
console.log(result);

// Cases
// mutation(["hello", "hey"]) should return false.
// mutation(["hello", "Hello"]) should return true.
// mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
// mutation(["Mary", "Army"]) should return true.
// mutation(["Mary", "Aarmy"]) should return true.
// mutation(["Alien", "line"]) should return true.
// mutation(["floor", "for"]) should return true.
// mutation(["hello", "neo"]) should return false.
// mutation(["voodoo", "no"]) should return false.
