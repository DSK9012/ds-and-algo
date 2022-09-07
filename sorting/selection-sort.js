//  1 - Asc
// -1 - Desc
function selectionSort(arr, sortType) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (sortType === 1 ? arr[j] < arr[lowest] : arr[j] > arr[lowest]) {
        lowest = j;
      }
    }
    if (lowest !== i) [arr[i], arr[lowest]] = [arr[lowest], arr[i]]; // Optimized
    console.log(arr);
  }

  return arr;
}

console.log('RESULT:', selectionSort([5, 1, 2, 3, 4, 7, 6, 10, 8], -1));
