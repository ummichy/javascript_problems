function opposite(str) {
  let reverse = "";
  for (let a = str.length - 1; a >= 0; a--) {
    reverse += str[a];
  }
  return reverse;
}


console.log(opposite("hello"));
