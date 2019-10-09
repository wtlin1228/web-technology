// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Solution 1
// function pyramid(n) {
//   numColumns = 2 * n - 1;
//   for (let row = 1; row <= n; row++) {
//     let stair = '';
//     for (let column = 1; column <= numColumns; column++) {
//       // console.log(`row: ${row}, column: ${column}, range: ${n-row}~${n+row}`)
//       if (n - row < column && column < n + row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//     console.log(stair);
//   }
//   return;
// }

// Solution 2
function pyramid(n, row = 1, column = 1, stair = '') {
  if (row > n) {
    return;
  }

  if (column > 2 * n - 1) {
    console.log(stair);
    return pyramid(n, row + 1)
  }

  if (n - row < column && column < n + row) {
    stair += '#';
  } else {
    stair += ' ';
  }

  return pyramid(n, row, column + 1, stair);
}

module.exports = pyramid;
