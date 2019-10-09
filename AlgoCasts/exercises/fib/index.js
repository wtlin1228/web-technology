// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Solution 1
// function fib(n) {
//   let last2 = 0
//   let last1 = 1;

//   if (n === 0) return 0;
//   if (n === 1) return 1;

//   for (let i = 2; i < n; i++) {
//     let temp = last1 + last2;
//     last2 = last1;
//     last1 = temp; 
//   }

//   return last1 + last2;
// }

// Solution 2
// function fib(n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;

//   return fib(n - 1) + fib(n - 2);
// }

// Solution 3
function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  }
}

function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

module.exports = fib;
