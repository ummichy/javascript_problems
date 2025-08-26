function capital(str) {
  let word = str.split(" "); 
  for (let a = 0; a < word.length; a++) {
    word[a] = word[a][0].toUpperCase() + word[a].slice(1); 
  }
  return word.join(" "); 
}

console.log(capital("hello world")); 
