var search = location.search.substring(1);
// eslint-disable-next-line
search = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');

// Diplay event data on the event page
$.get(`/api/events/${search.event_id}`, function (data) {
  console.log(data);
  // the name
  $("#event-name").append("<h4>" + data.name + "</h4>");
  // the date
  $("#event-details").append("<h5>Event Date: " + data.date + "</h5>");
  // the time
  $("#event-details").append("<h5>Event Time: " + data.time + "</h5>");
  // the location
  $("#event-details").append("<h5>Location: " + data.location + "</h5>");
  // the theme
  $("#event-details").append("<h5>Theme: " + data.theme + "</h5>");
});

// Display Guest List on the event page
$.get(`/api/guest-list/${search.event_id}`, function (data) {
  console.log("guest list data is: ", data);
  // the guest name
  $("#guestInfo").append("<h6>Guest Name: " + data.name + "</h6>");
  // the time
  $("#guestInfo").append("<h6>Email Address: " + data.email + "</h6>");
  // the location
  $("#guestInfo").append("<h6>Phone Number: " + data.phoneNumber + "</h6>");
});


// // event map
// var geocoder;
// var map;

// function initMap() {
//   geocoder = new google.maps.Geocoder();
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//     streetViewControl: false
//   });

//   let markers = eventLocation.features;
//   console.log(markers);
//   let locationName = markers.properties.venuName;
//   let latitude = markers.geometry.coordinates[1];
//   let longitude = markers.geometry.coordinates[0];
//   console.log(locationName + ": " + latitide + " " + longitude);
//   dropMarker(latitude, longitude, locationName);
// }

// function dropMarker(lat, long, locationName) {
//   var location = { lat: lat, lng: lng };
//   var contentString = "<h4>" + locationName + "</h4>";
//   var infowindow = new google.maps.InfoWindow({
//     content: contentString
//   });
//   var marker = new google.maps.Marker({ position: location, map: map, title: locationName });
//   marker.addListener('click', function () {
//     infowindow.open(map, marler);
//   });
// }

// const eventLocation = {
//   "type": "FeatureCollection",
//   "features": [
//     { "type": "Feature", "properties": { "venueName": "PULL FROM DB" }, "geometry": { "type": "Point", "coordinates": [66.666666, 77.77777] } }
//   ]
// };

// const accordionWrapper = $("#accordionWrapper");

// async function getGuestList () {
//   // ajax call for guestlist
//   $.ajax(
//     {
//       method: "GET",
//       url: "/api/guestlist",
//       data: guests
//     }
//   );
//   return guests;
// }

// async function fillGuestList () {
//   const guestList = await getGuestList ();
//   // console.log(guestList);
//   // make a loop listing all guests and populating html page
// }

// $(accordionWrapper).HTML(fillGuestList());