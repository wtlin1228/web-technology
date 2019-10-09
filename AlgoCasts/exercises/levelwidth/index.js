// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const result = [1];
  let level1 = [root];
  let level2 = [];

  while (level1.length || level2.length) {
    if (!level1.length && level2.length) {
      level1 = level2;
      level2 = [];
      result.push(level1.length);
    }

    const node = level1.shift();
    level2.push(...node.children);
  }

  return result;
}

module.exports = levelWidth;
