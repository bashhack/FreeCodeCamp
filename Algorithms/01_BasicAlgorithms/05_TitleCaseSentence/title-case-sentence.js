/**
 * Created by marclaughton on 8/31/15.
 */


// Main
function titleCase(str) {
    'use strict';

    // Create an array
    var strArray = str.toLowerCase().split(' '),
        i = 0,
        ii = strArray.length,
        firstChar = null,
        titleCaseArray = [];

    // console.log(strArray);

    for (i; i < ii; i += 1) {
        //console.log(strArray[i]);
        //console.log(strArray[i].charAt(0).toUpperCase());

        // Normalize each idx
        strArray[i].toLowerCase();

        // Convert first letter to uppercase
        firstChar = strArray[i].charAt(0).toUpperCase();

        // Replace the first character at each index with uppercase char
        titleCaseArray.push(
            strArray[i].replace(strArray[i].charAt(0), firstChar)
        );
    }

    // Turn into string for return output
    titleCaseArray = titleCaseArray.join(' ');

    return titleCaseArray;
}

// Test
var result = titleCase("I'm a little tea pot");
console.log(result);

// Cases
// titleCase("I'm a little tea pot") should return a string.
// titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
// titleCase("sHoRt AnD sToUt") should return "Short And Stout".
// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".
