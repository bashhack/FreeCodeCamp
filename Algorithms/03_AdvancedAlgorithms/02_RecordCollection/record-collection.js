/**
 * Created by marclaughton on 01/31/16.
 */


// Main
// Setup
var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [
        "1999",
        "Little Red Corvette"
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
};

// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function update(id, prop, value) {
  if (value !== "" && prop !== "tracks") {
    if (collection[id][prop]) {
      collection[id][prop].push(value);
    } else {
      collection[id][prop] = [value];
    }
  } else if (value !== "") {
    collection[id][prop] = value;
  } else {
    delete collection[id][prop];
  }

  return collection;
}

// Test
var result = update(5439, "artist", "");
console.log(result);

// Cases
// After updateRecords(5439, "artist", "ABBA"), artist should be "ABBA"
// After updateRecords(5439, "tracks", "Take a Chance on Me"), tracks should have "Take a Chance on Me" as the last element.
// After updateRecords(2548, "artist", ""), artist should not be set
// After updateRecords(1245, "tracks", "Addicted to Love"), tracks should have "Addicted to Love" as the last element.
// After updateRecords(2468, "tracks", "Free"), tracks should have "1999" as the first element.
// After updateRecords(2548, "tracks", ""), tracks should not be set
