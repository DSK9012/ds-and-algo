/* Problem - Count unique values
	sumZero([-2, 0, 1, 2]) // [-2, 2]
	sumZero([-2, 0, 1, 3]) // undefined
*/

// Naive solution
// Time complexity - O(n^2)
// Space complexity - O(1)
function sumZero1(arr){
	for(let i = 0; i < arr.length; i++){
		for(let j = i+1; j < arr.length; j++){
			if(arr[i] + arr[j] === 0){
				return [arr[i], arr[j]];
			}
		}
	}
}

console.time();
console.log(sumZero1([-4,-3,-2,-1,0,1,2,5]));
console.timeEnd();


// Refactored solution
// Time complexity - O(n)
// Space complexity - O(1)
function sumZero2(arr){
	let left=0;
	let right=arr.length-1;
	while(left<right){
		const sum=arr[left]+arr[right];
		if(sum===0) return [arr[left], arr[right]];
		else if(sum>0) right--;
		else left++;
	}
}


console.time();
console.log(sumZero2([-4,-3,-2,-1,0,1,2,5]));
console.timeEnd();
