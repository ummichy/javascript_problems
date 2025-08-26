function factorial(n) {
  let ans = 1; 
  for (let a = 1; a <= n; a++) {
    ans *= a; 
  }
  return ans;
}
console.log(factorial(5)); 
