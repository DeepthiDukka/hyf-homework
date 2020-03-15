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
}

const travelTime = timeTakenForDestination(travelInformation);
console.log("Total travel time is : " + travelTime);