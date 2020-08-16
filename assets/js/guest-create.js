const createYourGuestList = $("#createYourGuestList");

$(document).ready(function () {
  AOS.init({
    easing: "ease",
    duration: 500
  });
});

function gatherFormData() {
  const guestName = $("#guestName").val();
  const guestEmail = $("#guestEmail").val();
  const guestPhoneNumber = $("#guestPhoneNumber").val();

  const guestObject = {
    guestName: guestName,
    guestEmail: guestEmail,
    guestPhoneNumber: guestPhoneNumber
  };
  return guestObject;
}

function guestCreate() {
  const newGuest = gatherFormData();
  $.ajax({
    method: "POST",
    url: "/api/guest-create",
    data: newGuest
  });
};

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
$(createYourGuestList).click(function () {
  event.preventDefault();
  guestCreate();
  window.location.pathname = "/viewEvent";
});