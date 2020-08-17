const createYourGuestList = $("#createYourGuestList");

let i = 0;

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

// function gatherFormData() {
//   let formDataObject = {};
//   for(j=0; j<i; j++){
//     const guestName = $(`#guestName${j}`).val();
//     const guestEmail = $(`#guestEmail${j}`).val();
//     const guestPhoneNumber = $(`#guestPhoneNumber${j}`).val();

//     const guestObject = {
//       guestName: guestName,
//       guestEmail: guestEmail,
//       guestPhoneNumber: guestPhoneNumber
//     };
//     formDataObject.append(guestObject);
//   }
//   console.log(formDataObject);
//   return formDataObject;
// }

function guestCreate() {
  const newGuest = gatherFormData();
  $.ajax({
    method: "POST",
    url: "/api/guest-create",
    data: newGuest
  });
  window.location.pathname = "/viewEvent";
}

// Add another guest input form
$(addGuest).click(function () {
  event.preventDefault();
  i++;
  $(displayGuestList).prepend(
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
});