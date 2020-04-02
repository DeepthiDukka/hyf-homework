//A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward. eg: madam

function longestPalindrome1(str) {
  const entireString = str.toLowerCase();
  if (str.length < 2) {
    return "";
  }

  let palindrome = "";

  for (let i = 0; i < entireString.length; i++) {
    for (let j = 1; j <= entireString.length - i; j++) {
      if (entireString.substr(i, j) === stringReverser(entireString, i, j)) { //check if string[i,j] is palindrom
        if (j > palindrome.length) {                 //if it's true then check if the size of string[i,j] is higher then the current value and store it
          palindrome = entireString.substr(i, j);  
        }
      }
    }
  }

  if (!palindrome) {
    return null;
  }

  else return palindrome;
}
function stringReverser(stringToReverse, start, length) {
  const reversedWord = stringToReverse.substr(start, length).split('').reverse().join(''); // as reverse won't work directly so using split and join.
  return reversedWord;
}

let result1 = longestPalindrome1("nan noon is redder malayalam");
console.log("The longest palindromic substring of a given string is: " + result1 + " and length is: " + result1.length);

/*
let longestPalindrome = function(string) {

    let length = string.length;
    let result = "";
  
    let centeredPalindrome = function(left, right) {
      while (left >= 0 && right < length && string[left] === string[right]) {
        //expand in each direction.
        left--;
        right++;
      }
  
      return string.slice(left + 1, right);
    };
  
    for (let i = 0; i < length - 1; i++) {
      let oddPal = centeredPalindrome(i, i + 1);
  
      let evenPal = centeredPalindrome(i, i);
  
      if (oddPal.length > 1)
        console.log("oddPal: " + oddPal);
      if (evenPal.length > 1)
        console.log("evenPal: " + evenPal);
  
      if (oddPal.length > result.length)
        result = oddPal;
      if (evenPal.length > result.length)
        result = evenPal;
    }
    return "the palindrome is: " + result + " and its length is: " + result.length;
  };
  
  console.log(
    longestPalindrome("nan noon is redder malayalam")
  );*/