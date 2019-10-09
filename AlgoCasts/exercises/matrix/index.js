// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// Solution 1
// function matrix(n) {
//   const matrix = [];

//   // init the matrix
//   for (let i = 0; i < n; i++) {
//     if (i === 0) {
//       const firstRow = [];
//       for (let j = 0; j < n; j++) {
//         firstRow.push(j + 1);
//       }
//       matrix.push(firstRow);
//     } else {
//       matrix.push(new Array(n).fill(0));
//     }
//   }

//   // console.log(matrix)

//   // use row, column, direction to solve it
//   let row = 0;        // from 0 to n - 1
//   let column = n - 1; // from 0 to n - 1
//   let direction = 0;  // 0: down, 1: left, 2: up, 3: right
  
//   let number = n; 

//   for (let i = n - 1; i > 0; i--) {
//     for (let j = 0; j < 2; j++) {
//       for (let k = 0; k < i; k++) {
//         number += 1;
//         if (direction === 0) {
//           // case 'down':
//           row += 1;
//         } else if (direction === 1) {
//           // case 'left':
//           column -= 1;
//         } else if (direction === 2) {
//           // case 'up':
//           row -= 1;
//         } else if (direction === 3) {
//           // case 'right':
//           column += 1;
//         }
//         matrix[row][column] = number;   
//       }
//       direction = (direction + 1) % 4;
//     }
//   }

//   // console.log(matrix);

//   return matrix;
// }

// Solution 2
function matrix(n) {
  const matrix = [];

  for (let i = 0; i < n; i++) {
    matrix.push([]);
  }

  let startRow = 0;
  let endRow = n - 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let counter = 1;

  while(startRow <= endRow && startColumn <= endColumn) {
    // top row
    for (let i = startColumn; i <= endColumn; i++) {
      matrix[startRow][i] = counter;
      counter++;
    }
    startRow++;
    
    // right column
    for (let i = startRow; i <= endRow; i++) {
      matrix[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    // bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      matrix[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // left column
    for (let i = endRow; i >= startRow; i--) {
      matrix[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return matrix;
}

module.exports = matrix;
