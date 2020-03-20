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
console.log(travelTime);

//As per the feedback: implemented return object
const travelDetails = {
  speed: 50,
  destinationDistance: 432,
};

function timeTakenForDestination(travelDetails) {

  let time = travelDetails.destinationDistance / travelDetails.speed;
  let totalHours = Math.floor(time);
  let totalMinutes = Math.round((time - totalHours) * 60);
  let obj = {
    totalHours: totalHours,
    totalMinutes: totalMinutes
  };
  return obj;
};
const travelTime1 = timeTakenForDestination(travelDetails);
console.log(travelTime1);