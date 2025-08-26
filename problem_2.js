function vowelCount(str) {
  let total = 0;
  let vowel = "aeiouAEIOU"; 
  for (let a = 0; a < str.length; a++) {
    if (vowel.includes(str[a])) {
      total++;
    }
  }
  return total;
}

console.log(vowelCount("programming")); 