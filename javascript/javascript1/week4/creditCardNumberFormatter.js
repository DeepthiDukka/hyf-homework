// Credit card number and type
function formatCreditCardNumber(value){
    if(isNaN(Number(value))){
        return 'Not a Number'
    }
    return {
    original : value ,
    formatted : value.toString().replace(/\d{4}/g,'$& ')
    }
    }

    console.log(formatCreditCardNumber('1234123412341234'));

    function checkCreditCardType(value){
    if(value.toString().match(/^(?:3[47][0-9]{13})$/)){
    return 'American Express Card' //American Express :- Starting with 34 or 37, length 15 digits.
    } else if(value.toString().match(/^(?:4[0-9]{12}(?:[0-9]{3})?)$/)) {
    return 'Visa Credit Card' //Visa :- Starting with 4, length 13 or 16 digits.
    } else if(value.toString().match(/^(?:5[1-5][0-9]{14})$/)){
    return 'Master Card' //MasterCard :- Starting with 51 through 55, length 16 digits.
    }
    }

    console.log(checkCreditCardType('5100123412341234'));
    


/* Character frequencies

console.log(getCharacterFrequencies('happy'));
/*
{
  characters: [
    {
      character: 'a',
      count: 1
    },
    {
      character: 'h',
      count: 1
    },
    {
      character: 'p',
      count: 2
    },
    {
      character: 'y',
      count: 1
    }
  ], length: 5
}
*/

/*function getReply(value){
    if(value.toString().toUpperCase() === 'Hello my name is Benjamin'.toUpperCase()){
    return console.log('nice to meet you Benjamin');
    }

    return 'Command Not Added';
  } */
  