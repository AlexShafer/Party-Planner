const createYourParty = $("#createYourParty");

function gatherFormData() {
  const eventName = $("#eventName").val();
  const eventDescription = $("#eventDescription").val();
  const inputDate = $("#inputDate").val();
  const inputTime = $("#inputTime").val();
  const inputVenue = $("#inputVenue").val();
  const eventAddress = $("#eventAddress").val();
  const inputCity = $("#inputCity").val();
  const inputState = $("#inputState").val();
  const inputZip = $("#inputZip").val();

  const eventObject = {
    eventName: eventName,
    eventDescription: eventDescription,
    inputDate: inputDate,
    inputTime: inputTime,
    inputVenue: inputVenue,
    eventAddress: eventAddress,
    inputCity: inputCity,
    inputState: inputState,
    inputZip: inputZip,
  };
  return eventObject;
}

async function eventCreate() {
  const newEvent = gatherFormData();
  try {
    const createdEvent = await $.ajax({
      method: "POST",
      url: "/api/events",
      data: newEvent
    });
    console.log("created event is: ", createdEvent);
    const eventId = "?event_id=" + createdEvent.id;
    window.location.href = "/addGuest" + eventId;
  } catch (e) {
    console.log(e);
  }
}

// Create Event
$(createYourParty).click(function () {
  event.preventDefault();
  eventCreate();
});



