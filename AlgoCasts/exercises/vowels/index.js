// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Solution 1
// function vowels(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0;
  
//   for (let c of str) {
//     if (vowels.includes(c.toLowerCase())) {
//       count++;
//     }
//   }

//   return count;
// }

// Solution 2
function vowels(str) {
  return str.match(/[aeiou]/gi) ? str.match(/[aeiou]/gi).length : 0;
}

module.exports = vowels;
