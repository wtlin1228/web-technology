// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution 1
// function anagrams(stringA, stringB) {
//   const mapA = buildCharMap(stringA);
//   const mapB = buildCharMap(stringB);

//   return isEquivalent(mapA, mapB);
// }

// function filterString(s) {
//   return s.replace(/[^\w]/gi, '').toLowerCase();
// }

// function buildCharMap(s) {
//   const map = {};
//   for (let c of filterString(s)) {
//     map[c] = map[c] ? map[c] + 1 : 1;
//   }

//   return map;
// }

// function isEquivalent(a, b) {
//   // If number of properties is different,
//   // objects are not equivalent
//   if (Object.keys(a).length !== Object.keys(b).length) {
//       return false;
//   }

//   for (let key in a) {
//       // If values of same property are not equal,
//       // objects are not equivalent
//       if (a[key] !== b[key]) {
//           return false;
//       }
//   }

//   // If we made it this far, objects
//   // are considered equivalent
//   return true;
// }

// Solution 2
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(s) {
  return s.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}


module.exports = anagrams;
