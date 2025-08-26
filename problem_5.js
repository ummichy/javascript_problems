function duplicatesRemove(arr) {
  let unique = [];
  for (let a = 0; a < arr.length; a++) {
    if (!unique.includes(arr[a])) { 
      unique.push(arr[a]);
    }
  }
  return unique;
}
console.log(duplicatesRemove([1, 2, 2, 3, 4, 4])); 
