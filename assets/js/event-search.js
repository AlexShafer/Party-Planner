// eslint-disable-next-line
function eventlink (id) {
  let eventQuery = "?event_id=" + id;
  window.location.href = "/viewEvent" + eventQuery;
}

// make a get request to our api to grab every character
$.get("/api/events", function(data) {

  // for each character that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // create a parent div for the oncoming elements
    var eventSection = $(`<div onclick="eventlink(${data[i].id})">`);
    // add a class to this div: 'well'
    eventSection.addClass("card");
    // add an id to the well to mark which well it is
    eventSection.attr("id", "event-list-" + i);
    // append the well to the well section
    $("#event-list").append(eventSection);

    // Now add all of our character data to the well we just placed on the page
    // the name
    $("#event-list-" + i).append("<h3>" + data[i].name + "</h3>");
    // the date
    $("#event-list-" + i).append("<h4>Event Date: " + data[i].date + "</h4>");
    // the time
    $("#event-list-" + i).append("<h4>Event Time: " + data[i].time + "</h4>");
    // the location
    $("#event-list-" + i).append("<h4>Location: " + data[i].location + "</h4>");
    // the theme
    $("#event-list-" + i).append("<h4>Theme: " + data[i].theme + "</h4>");
  }
});