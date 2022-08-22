/* Problem - Count unique values
  countUniqueValues([1,1,1,1,1,2]) // 2
  countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
  countUniqueValues([]) // 0
*/
 
// Time complexity - O(n)
// Space complexity - O(1)
function countUniqueValues(arr){
  let i=0;
  let j=1;
  while(j<arr.length){
    if(arr[i]!==arr[j]){
      i++;
      arr[i]=arr[j];
    }
    j++;
  }
  return arr.slice(0, i+1).length;
}

console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
