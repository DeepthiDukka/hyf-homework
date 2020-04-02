// method using loops
const string = "happy";

function getFrequency(string) {
    let freq = {};
    for (let i = 0; i < string.length; i++) {
        let character = string.charAt(i);
        if (freq[character]) {
            freq[character]++;
        } else {
            freq[character] = 1;

        }
    }

    return freq;

}
console.log(getFrequency(string));
console.log('length of the string:', string, 'is', string.length);

// other method
const str = 'happy';

function getCharacterFrequencies(target) {
    const chars = {};

    for (let char of target) {
        chars[char] = chars[char] + 1 || 1;
    }

    return chars;

}

console.log(getCharacterFrequencies(str));
console.log('length of :', str, 'is', str.length);