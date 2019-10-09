// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const map = {};
  let maxNum = 0;
  let maxChr = '';
  
  for (let c of str) {
    map[c] = map[c] + 1 || 1;
    
    if (map[c] > maxNum) {
      maxNum = map[c];
      maxChr = c;
    }
  }

  return maxChr;
}

module.exports = maxChar;
