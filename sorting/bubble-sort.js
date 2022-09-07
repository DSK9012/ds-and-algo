//  1 - Asc
// -1 - Desc
function bubbleSort(arr, sortType) {
  for (let i = arr.length; i > 0; i--) {
    // This is to restrict j to not exceed length of arr.
    let noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (sortType === 1 ? arr[j] > arr[j + 1] : arr[j] < arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        noSwap = false;
      }
      console.log(arr);
    }
    console.log('-------');
    if (noSwap) break; // Optimized
  }

  return arr;
}

console.log('RESULT:', bubbleSort([5, 1, 2, 3, 4, 7, 6, 10, 8], -1));
