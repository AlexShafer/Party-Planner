const messageBoard = document.getElementById("messageBoard");
let search = location.search.substring(1);

let address; // initializing address variable for google maps api

// eslint-disable-next-line
search = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');

// Diplay event data on the event page
$.get(`/api/events/${search.event_id}`, function (data) {
  // console.log(data);

  address = `${data.address}, ${data.city}, ${data.state}`; // setting value for google maps api later

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
  data.forEach(guest => {
    let div = $("<div>");
    let name =$("<h4>").text("Name: " + guest.name);
    let email =$("<h4>").text("Email Address: " + guest.email);
    let phone =$("<h4>").text("Phone Number: " + guest.phoneNumber);
    div.append(name, email, phone, $("<br/>"));
    $("#guestInfo").append(div);
  });
});

function fillMessageBoard (){
  $.get(`/api/messageBoard/${search.event_id}`, function(data){
    messageBoard.innerHTML = ""; // Cleans out message board to avoid double posts
    console.log("data is: ", data);
    data.forEach(message => {
      $(messageBoard).append(`<p>${message.author}: ${message.message}</p>`);
    });
  });
}

function postMessage(){
  let newMessage = {
    author: $("#author").val(),
    message: $("#message-box").val(),
    EventId: search.event_id
  };
  $.ajax({
    method: "POST",
    url: "/api/messageBoard",
    data: newMessage
  });
}

$("#message-submit").click(function(){
  event.preventDefault();
  postMessage();
  fillMessageBoard();
  fillMessageBoard();
});

fillMessageBoard();

// // event map
var geocoder;
var map;

function codeAddress() {

  // Define address to center map to
  console.log("address is: ", address);

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
    zoom: 15,
    center: latlng
  };

  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // Call the codeAddress function (once) when the map is idle (ready)
  google.maps.event.addListenerOnce(map, "idle", codeAddress);
}

initialize();