var search = location.search.substring(1);
// eslint-disable-next-line
search = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');

// Diplay event data on the event page
$.get(`/api/events/${search.event_id}`, function (data) {
  console.log(data);
  // append the event name to the title
  $("#event-title").append(data.name);
  // the name
  $("#event-name").append("<h3>" + data.name + "</h3>");
  // the date
  $("#event-details").append("<h4>Event Date: " + data.date + "</h4>");
  // the time
  $("#event-details").append("<h4>Event Time: " + data.time + "</h4>");
  // the location
  $("#event-details").append("<h4>Location: " + data.location + "</h4>");
  // the theme
  $("#event-details").append("<h4>Theme: " + data.theme + "</h4>");
});

// Display Guest List on the event page
$.get(`/api/guest-list/${search.event_id}`, function (data) {
  console.log("guest list data is: ", data);
  // the guest name
  $("#guest-info").append("<h4>Guest Name: " + data.name + "</h4>");
  // the time
  $("#guest-info").append("<h4>Email Address: " + data.email + "</h4>");
  // the location
  $("#guest-info").append("<h4>Phone Number: " + data.phoneNumber + "</h4>");
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

