
const userInformation = {
    name: '',
    toDoList: [],
    day: '',
    favoriteDish: '',
    myCalendar: []
};

  //Introducing myself
  function getReply(command) {
    if(command.toString().toLowerCase() === 'hello my name is Benjamin'.toLowerCase()){
    return ('nice to meet you Benjamin');
    } else if(command.toString().toLowerCase() === 'what is my name'.toLowerCase()){
        if(userInformation.name === undefined){
            return `You have not introduced yourself`;
        } else {
        return `${userInformation.name}`;
     } 
    }




  

console.log(getReply('Hello my name is Benjamin'));
console.log(getReply('What is my name'))};