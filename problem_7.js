function evenNumbersFind(arr) {
  let evenNums = [];
  for (let a = 0; a < arr.length; a++) {
    if (arr[a] % 2 === 0) { 
      evenNums.push(arr[a]);
    }
  }
  return evenNums;
}

console.log(evenNumbersFind([1, 2, 3, 4, 5, 6]));