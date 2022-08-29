# **Divide and Conquer Pattern**

* This pattern involves diving a data set into smaller chunks and then repeating a process with a subset of data.
* This patterm can tremendously decrease time complexity.
* Data should be in sorted form.
* Most used in complex algorithms like binary-search etc.

**Example:**
```js
// Problem - Search value
searchValue([1, 2, 4, 6, 7, 8, 9, 20, 30], 20) // 7
searchValue([1, 2, 4, 6, 7, 8, 9, 20, 30], 40) // -1
```

```js
// Naive solution
// Time complexity - O(n)
// Space complexity - O(1)
function searchValue(arr, val){
  for(let i=0;i<arr.length; i++){
    if(arr[i]===val){
      return i;
    }
  }
  return -1;
}
```

```js
// Refactored solution
// Time complexity - O(log n)
// Space complexity - O(1)
function searchValue(arr, val){
  let min=0;
  let max=arr.length-1;
  while(min<=max){
    let middle=Math.floor((min+max)/2);
    let currentElement=arr[middle];

    if(currentElement<val){
      min=middle+1;
    } else if(currentElement>val){
      max=middle-1;
    } else{
      return middle;
    }
  }
  return -1;
}
```
