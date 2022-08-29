# **Sliding Window Pattern**
  
* This pattern involves creating a window which can wither be an array or number from one position to another.
* Depending on a certain condition, the window either increases or closes (and a new window is created).
* Very useful for keeping track of a subset of data in an array/string etc.

**Example:**
```js
// Problem - Find the maximum sub-array sum
maxSubArraySum([1, 4, 5, 6], 2) // 11
maxSubArraySum([1, 4, 5, 1], 2) // 9
```

```js
// Naive solution
// Time complexity - O(n^2)
// Space complexity - O(1)
function maxSubarraySum(arr, num) {
  if ( num > arr.length){
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i ++){
    temp = 0;
    for (let j = 0; j < num; j++){
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
```

```js
// Refactored solution
// Time complexity - O(n)
// Space complexity - O(1)
function maxSubarraySum(arr, num){
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

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
```


