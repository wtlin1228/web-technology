// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverse(str) {
  let reversed = '';

  for (let c of str) {
    reversed = c + reversed;
  }

  return reversed;
}

function reverseInt(n) {
  const sign = Math.sign(n);
  const str = (n * sign).toString();
  const reversedStr = reverse(str);
  
  return sign * parseInt(reversedStr);

  // return Math.sign(n) * parseInt(reverse((n * Math.sign(n)).toString()));
}

module.exports = reverseInt;
