 // 6. To show that location on a map using fx the Google maps api

 let map;

 function renderLocationOnGoogleMap() {
   map = new google.maps.Map(document.getElementById('map'), {
     center: {
       lat: 55.757,
       lng: 12.433
     },
     zoom: 8
   });
 };