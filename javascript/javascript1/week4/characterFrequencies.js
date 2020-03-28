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