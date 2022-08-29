/* Problem - Find maximum sub-array sum
  maxSubArraySum([1, 4, 5, 6], 2) // 11
  maxSubArraySum([1, 4, 5, 1], 2) // 9
*/

// Time complexity - O(n^2)
// Space complexity - O(1)
function maxSubarraySumNaive(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

console.time();
maxSubarraySumNaive([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
console.timeEnd();

// Time complexity - O(n)
// Space complexity - O(1)
function maxSubarraySumRefactored(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.time();
maxSubarraySumRefactored([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
console.timeEnd();
