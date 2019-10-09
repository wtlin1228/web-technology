// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        const temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }

  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const center = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, center));
  const right = mergeSort(arr.slice(center, arr.length));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  
  return [...result, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
