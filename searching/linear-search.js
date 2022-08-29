/* Problem - Search value
  linearSearch([1, 2, 4, 6, 7, 8, 9, 20, 30], 20) // 7
  linearSearch([1, 2, 4, 6, 7, 8, 9, 20, 30], 40) // -1
*/

// Time complexity - O(n)
function linearSearch(arr, value) {
  const index = arr.findIndex((item) => item === value);
  return index !== -1 ? index : -1;
}
console.time();
console.log(linearSearch([1, 2, 3, 4, 5], 3));
console.timeEnd();
