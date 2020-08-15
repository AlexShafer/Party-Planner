const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://www.officeapi.dev/api/quotes/random"; // site that doesn’t send Access-Control-*
const eventName = $("#eventName").val();
const eventDescription = $("#eventDescription").val();
const inputDate = $("#inputDate").val();
const inputTime = $("#inputTime").val();
const inputVenue = $("#inputVenue").val();
const eventAddress = $("#eventAddress").val();
const inputCity = $("#inputCity").val();
const inputState = $("#inputState").val();
const inputZip = $("#inputZip").val();
const guestName = $("#guestName").val();
const guestEmail = $("#guestEmail").val();
const guestPhoneNumber = $("#guestPhoneNumber").val();

const eventObject = [{
  eventName: eventName,
  eventDescription: eventDescription,
  inputDate: inputDate,
  inputTime: inputTime,
  inputVenue: inputVenue,
  eventAddress: eventAddress,
  inputCity: inputCity,
  inputState: inputState,
  inputZip: inputZip,
  guestName: guestName,
  guestEmail: guestEmail,
  guestPhoneNumber: guestPhoneNumber
}];

const createYourParty = $("#createYourParty");
const addGuest = $("#addGuest");
const createGuestList = $("#createGuestList");

$(document).ready(function () {
  AOS.init({
    easing: "ease",
    duration: 500
  });
});

fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
  .then(response => response.text())
  .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"));

const officeQuote = function () {
  $.ajax({
    url: (proxyurl + url)
  }).then(function (response) {
    $("#officeQuote").empty();
    $("#officeQuote").append(response.data.content + " -- " + response.data.character.firstname + " " + response.data.character.lastname);
  });
};

function eventCreate() {
  $.ajax({
    method: "POST",
    url: "api/event-create",
    data: eventObject
  });
}

// Add another guest input form
let i = 0;
$(addGuest).click(function () {
  event.preventDefault();
  i++;
  $(createGuestList).append(
    `<div class="form-group col-md-4">
      <label for="inputGuestName">Name</label>
      <input type="text" class="form-control" id="guestName${i}">
    </div>
    <div class="form-group col-md-4">
      <label for="inputGuestEmail">Email</label>
      <input type="text" class="form-control" id="guestEmail${i}">
    </div>
    <div class="form-group col-md-2">
      <label for="inputGuestPhoneNumber">Phone Number</label>
      <input type="text" class="form-control" id="guestPhoneNumber${i}">
    </div>`
  );
});

// Create Event
$(createYourParty).click(function () {
  event.preventDefault();
  eventCreate();
});

officeQuote();

