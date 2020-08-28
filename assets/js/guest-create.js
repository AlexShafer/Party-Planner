const createYourGuestList = $("#createYourGuestList");

let dataFetchers = [];

var search = location.search.substring(1);
// eslint-disable-next-line
search = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');

function guestCreate() {
  dataFetchers.forEach(function (dataFetcher) {
    const newGuest = dataFetcher();
    $.ajax({
      method: "POST",
      url: "/api/guest-create",
      data: newGuest
    });
  });
  window.location.pathname = "/viewEvent";
}

function addGuestInput(event) {
  if (event) {
    event.preventDefault();
  }
  let formRow = $("<div class=\"form-row\">");
  let nameFormGroup = $("<div class=\"form-group col-4\">");
  let nameLabel = $(`<label for="inputGuestName${dataFetchers.length}">`).text("Name");
  let nameInput = $(`<input type="text" class="form-control" id="inputGuestName${dataFetchers.length}">`);
  nameFormGroup.append(nameLabel, nameInput);
  let emailFormGroup = $("<div class=\"form-group col-4\">");
  let emailLabel = $(`<label for="inputGuestEmail${dataFetchers.length}">`).text("Email");
  let emailInput = $(`<input type="text" class="form-control" id="inputGuestEmail${dataFetchers.length}">`);
  emailFormGroup.append(emailLabel, emailInput);
  let phoneFormGroup = $("<div class=\"form-group col-4\">");
  let phoneLabel = $(`<label for="inputGuestPhone${dataFetchers.length}">`).text("Phone Number");
  let phoneInput = $(`<input type="text" class="form-control" id="inputGuestPhone${dataFetchers.length}">`);
  phoneFormGroup.append(phoneLabel, phoneInput);
  formRow.append(nameFormGroup, emailFormGroup, phoneFormGroup);
  $("#guests").append(formRow);
  dataFetchers.push(function () {
    return {
      guestName: nameInput.val(),
      guestEmail: emailInput.val(),
      guestPhoneNumber: phoneInput.val(),
      EventId: search.event_id
    };
  });
}
addGuestInput();

// Add another guest input form
$(addGuest).click(addGuestInput);

// Create Event
$(createYourGuestList).click(function () {
  event.preventDefault();
  guestCreate();
});