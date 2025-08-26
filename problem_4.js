function maxFind(arr) {
  let maximum = arr[0]; 
  for (let a = 1; a < arr.length; a++) {
    if (arr[a] > maximum) {
      maximum = arr[a]; 
    }
  }
  return maximum;
}
console.log(maxFind([5, 1, 9, 3])); 