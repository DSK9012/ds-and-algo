//  1 - Asc
// -1 - Desc
function insertionSort(arr, sortType) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (sortType === 1 ? arr[j] > currentValue : arr[j] < currentValue) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
    console.log(arr);
  }

  return arr;
}

console.log('RESULT:', insertionSort([1, 5, 7, 6, 3, 2, 10, 8, 4, 4], 1));
