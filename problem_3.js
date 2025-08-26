function palindrome(str) {
  let reverse= "";
 for (let a = str.length - 1; a >= 0; a--) {
    reverse += str[a];
  }
  return str === reverse;
}
console.log(palindrome("madam")); 
console.log(palindrome("hello")); 
