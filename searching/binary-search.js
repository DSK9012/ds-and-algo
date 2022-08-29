/* Problem - Search value
  binarySearch([1, 2, 4, 6, 7, 8, 9, 20, 30], 20) // 7
  binarySearch([1, 2, 4, 6, 7, 8, 9, 20, 30], 40) // -1
*/

// Time complexity - O(log n)
function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length;
  let middle;
  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (arr[middle] === value) return middle;
    if (value > arr[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
}

console.time();
console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.timeEnd();
