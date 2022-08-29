# **Recursion**

* Recursion is a process(function) which calls itself.
* Very very useful in writing other complex algorithms using DS.

**Exmaple:**
```js
// Problem - Find factorial
factorial(10) // 
factorial(5) // 
```

```js
// Naive solution
// Time complexity - O(n)
// Space complexity - O(1)
function factorial(num){
  let total=1;
  for(let i=num;i>1;i--){
    total*=i;
  }
  return total;
} 
```

```js
// Refactored solution
// Time complexity - O(n)
// Space complexity - O(1)
function factorial(num){
  if(num===1) return 1;
  return num*factorial(num-1);
} 
```
