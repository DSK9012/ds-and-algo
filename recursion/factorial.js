// Problem - Find factorial
// factorial(10); // 3628800
// factorial(5); // 120

function factorialNaive(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

console.time();
factorialNaive(5);
console.timeEnd();

function factorialRefactored(num) {
  if (num === 1) return 1;
  return num * factorialRefactored(num - 1);
}

console.time();
factorialRefactored(10);
console.timeEnd();
