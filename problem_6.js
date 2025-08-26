function sumNumArray(arr) {
  let sum = 0; 
  for (let a = 0; a < arr.length; a++) {
    sum += arr[a]; 
  }
  return sum;
}
console.log(sumNumArray([1, 2, 3, 4])); 
