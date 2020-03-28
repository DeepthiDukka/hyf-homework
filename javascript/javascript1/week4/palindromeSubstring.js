//A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward. eg: madam
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
  );