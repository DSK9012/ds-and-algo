# **Multiple Pointers Pattern**
  
* Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.
* Very efficient for solving problems with minimal space complexity as well.

**Example:**
```js
// Problem - Checkout frequency of squares
countUniqueValues([1,3,2], [4,1,9]) // true
countUniqueValues([1,3,2], [4,1]) // false
countUniqueValues([1,2], [4,1,4]) // true
```
```js
// Naive solution
// Time complexity - O(n^2)
// Space complexity - O(1)
function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}

sumZero([-4,-3,-2,-1,0,1,2,5])
```
```js
// Refactored solution
// Time complexity - O(n)
// Space complexity - O(1)
function sumZero2(arr){
	let left=0;
	let right=arr.length;
	while(left<right){
		const sum=arr[left]+arr[right];
		if(sum===0) return [rr[left], arr[right]];
		else if(sum>0) right--;
		else left++;
	}
}

sumZero([-4,-3,-2,-1,0,1,2,5])
```