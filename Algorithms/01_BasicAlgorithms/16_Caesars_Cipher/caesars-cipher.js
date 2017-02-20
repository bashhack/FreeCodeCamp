/**
 * Created by marclaughton on 10/23/16.
 */


// Main
// jshint esversion: 6

const rot13 = (str) =>  // LBH QVQ VG!
  str.split('').reduce(
    (memoized, curr) =>
      memoized.concat(
        (curr.charCodeAt() >= 65 && curr.charCodeAt() <= 90) ?
          (curr.charCodeAt() < 78) ?
            String.fromCharCode(curr.charCodeAt() + 13)
          : String.fromCharCode(curr.charCodeAt() - 13)
        : String.fromCharCode(curr.charCodeAt())
      ),
    []
  ).join('');

// Test
var result = rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
console.log(result);

// Cases
// rot13("SERR PBQR PNZC") should decode to "FREE CODE CAMP"
// rot13("SERR CVMMN!") should decode to "FREE PIZZA!"
// rot13("SERR YBIR?") should decode to "FREE LOVE?"
// rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
