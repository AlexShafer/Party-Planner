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
var geocoder;
var map;

function codeAddress() {

  // Define address to center map to
  var address = "Portland, Oregon";

  geocoder.geocode({
    "address": address
  }, function(results, status) {

    if (status === google.maps.GeocoderStatus.OK) {

      // Center map on location
      map.setCenter(results[0].geometry.location);

      // Add marker on location
      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      });

      marker();

    } else {

      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}

function initialize() {

  geocoder = new google.maps.Geocoder();

  var latlng = new google.maps.LatLng(0, 0);
  var mapOptions = {
    zoom: 10,
    center: latlng
  };

  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // Call the codeAddress function (once) when the map is idle (ready)
  google.maps.event.addListenerOnce(map, "idle", codeAddress);
}

initialize();