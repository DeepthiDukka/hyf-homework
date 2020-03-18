// When will we be there??
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function timeTakenForDestination(travelInformation) {

  let time = travelInformation.destinationDistance / travelInformation.speed;
  let totalHours = Math.floor(time);
  let totalMinutes = Math.round((time - totalHours) * 60);
  return `${totalHours} hours and ${totalMinutes} minutes`
  };
const travelTime = timeTakenForDestination(travelInformation);
console.log("Total travel time is : " + travelTime);

//As per the feedback: implemented return object but unable to get the output
function timeCalculation(){
  const time = distance / speed;
  let obj = {
    totalHours: Math.floor(time),
    totalMinutes: Math.round((time - totalHours)*60)
  };
  return obj;
};
const speed = 50;
const distance = 432;
const travelTime1 = timeCalculation();
console.log(travelTime1);