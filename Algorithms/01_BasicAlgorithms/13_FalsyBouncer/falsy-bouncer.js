/**
 * Created by marclaughton on 08/15/16.
 */


// Main
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(function (x) { return x });
}

// Test
var result = bouncer([7, "ate", "", false, 9]);
console.log(result);

// Cases
// bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
// bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
// bouncer([false, null, 0, NaN, undefined, ""]) should return [].
// bouncer([1, null, NaN, 2, undefined]) should return [1, 2].
