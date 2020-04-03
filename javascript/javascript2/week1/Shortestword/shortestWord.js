// Method 1 of finding the shortest word in an array
const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium', [], 0, null, undefined, 'aa', Infinity, true];

function findShortestWord(word) {
  let shortest = word[0];
  for (let i = 0; i < word.length; i++) {
    if (typeof word[i] === 'string' &&
      (word[i].length < shortest.length)) {
      shortest = word[i];
    }
  }

  return shortest;
};
let result = findShortestWord(danishWords);
console.log(result);


// Method 2 of finding the shortest word in a array
function shortestWord(arr) {
  let shortest = '';
  // function to check the array elements length
  arr.forEach(function (str) {
    if (str.length < shortest.length) {
      shortest = str;
    }
  })
  return shortest;
}

const shortestWordInArray = arr => arr.reduce((base, element) => element.length < base.length ? element : base);
console.log(shortestWordInArray(['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium', 'my']));