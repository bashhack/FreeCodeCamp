/**
 * Created by marclaughton on 09/08/15.
 */


// Main
function truncate(str, num) {
    'use strict';

    // Check for valid input
    if (typeof str === 'string' || str instanceof String) {

        // Init
        var strLen = str.length,
            lenDiff = 0,
            truncIdx = 0;

        // Check if length of str > num
        if (strLen > num) {

            // Find difference between num and strLen
            lenDiff = strLen - num;

            // Find truncating point, factoring '...'
            truncIdx = (strLen - lenDiff) - 3;

            // Slice str at lenDiff
            str = str.slice(0, truncIdx);

            // Append '...'
            str += '...';

        } else {
            console.log('String was not longer than given num input.');
            return str;
        }
    }

    return str;
}

// Test
var result = truncate('A-tisket a-tasket A green and yellow basket', 11);
console.log(result);

// Cases
// truncateString("A-tisket a-tasket A green and yellow basket", 11) should return "A-tisket...".
// truncateString("Peter Piper picked a peck of pickled peppers", 14) should return "Peter Piper...".
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket".
// truncateString("A-", 1) should return "A...".
// truncateString("Absolutely Longer", 2) should return "Ab...".
