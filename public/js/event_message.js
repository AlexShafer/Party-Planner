/* global moment */

// When user clicks add-btn
$("#message-submit").on("click", function(event) {
  event.preventDefault();

  // Make a newEventMessage object
  var newEventMessage = {
    author: $("#author").val().trim(),
    body: $("#message-box").val().trim(),
    created_at: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(newEventMessage);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newEventMessage)
    // On success, run the following code
    .then(function() {

      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + newEventMessage.author + " added: </p>");
      row.append("<p>" + newEventMessage.body + "</p>");
      row.append("<p>At " + moment(newEventMessage.created_at).format("h:mma on dddd") + "</p>");

      $("#message-area").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#author").val("");
  $("#message-box").val("");
});

// When the page loads, grab all of our messages
$.get("/api/all", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("event_message");

      row.append("<p>" + data[i].author + " added.. </p>");
      row.append("<p>" + data[i].body + "</p>");
      row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

      $("#message-area").prepend(row);

    }

  }

});
