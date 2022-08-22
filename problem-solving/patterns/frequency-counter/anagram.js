/* Problem - Validate anagram
  validAnagram('', '') // true
  validAnagram('aaz', 'zza') // false
  validAnagram('anagram', 'nagaram') // true
  validAnagram("rat","car") // false)
*/

function validAnagram1(orgStr, testStr){
  if(orgStr.length>testStr.length) return false;
  let f1={};
  let f2={};
  for(let key of orgStr.split('')){
    f1[key]=(f1[key] || 0) + 1;  
  }
  
  for(let key of testStr.split('')){
    f2[key]=(f2[key] || 0) + 1;  
  }
  
  for(let key in f1){
      if((!(key in f2)) || f1[key]!==f2[key]) return false;
  }
  return true;
}

console.time();
validAnagram1('anagrams', 'nagaramm')
console.timeEnd();

function validAnagram2(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

console.time();
validAnagram2('anagrams', 'nagaramm')
console.timeEnd();
