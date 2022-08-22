/* Problem - Checkout frequency of squares
	checkFrequencyOfSquares([1,3,2], [4,1,9]) // true
	checkFrequencyOfSquares([1,3,2], [4,1]) // false
	checkFrequencyOfSquares([1,2], [4,1,4]) // true  
*/

// Naive Solution
function checkFrequencyOfSquares1(arr1, arr2){
	if(arr1.length !== arr2.length){
			return false;
	}
	let frequencyCounter1 = {}
	let frequencyCounter2 = {}
	for(let val of arr1){
			frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
	}
	for(let val of arr2){
			frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
	}
	for(let key in frequencyCounter1){
			if(!(key ** 2 in frequencyCounter2)){
					return false
			}
			if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
					return false
			}
	}
	return true
}

console.time();
console.log(checkFrequencyOfSquares1([1,2,3,2,5], [9,1,4,4,11]));
console.timeEnd();

// Refactored Solution
function checkFrequencyOfSquares2(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false;
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for(let val of arr1){
  	frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for(let val of arr2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
  }
  for(let key in frequencyCounter1){
		if(!(key ** 2 in frequencyCounter2)){
			return false
		}
		if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
			return false
		}
  }
  return true
}

console.time();
console.log(checkFrequencyOfSquares2([1,2,3,2,5], [9,1,4,4,11]));
console.timeEnd();
