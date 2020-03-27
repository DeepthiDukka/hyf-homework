

function getCharacterFrequencies(str) {
    
    return str.split('').reduce( (prev, curr) => {
      prev[curr] = prev[curr] ? prev[curr] + 1 : 1;
      return prev;
    }, {});
    return result;

  };
  
  console.log(getCharacterFrequencies('happy'));