/* Problem - Find maximum sub-array sum
  searchValue([1, 2, 4, 6, 7, 8, 9, 20, 30], 20) // 7
  searchValue([1, 2, 4, 6, 7, 8, 9, 20, 30], 40) // -1
*/

// Time complexity - O(n)
// Space complexity - O(1)
function searchValueNaive(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

console.time();
searchValueNaive([1, 2, 4, 6, 7, 8, 9, 20, 30], 40);
console.timeEnd();

// Time complexity - O(log n)
// Space complexity - O(1)
function searchValueRefactored(arr, val) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if (currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.time();
searchValueRefactored([1, 2, 4, 6, 7, 8, 9, 20, 30], 40);
console.timeEnd();
