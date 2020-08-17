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

// const accordionWrapper = $("#accordionWrapper");
// function loadEvents() {
//   $.get("/api/events", function (data) {
//     console.log(data);
//     // for loop w/ ajax.GET to populate list of events w/ eventList.append
//     for (i = 0; i < data.length; i++) {
//       accordionWrapper.append(
//         `<div class="card">
//           <!-- Card header -->
//           <div class="card-header" role="tab" id="headingEventList${i}">
//             <!--Options-->
//             <div class="dropdown float-left">
//               <button class="btn btn-info btn-sm m-0 mr-3 p-2 dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                 <i class="fas fa-pencil-alt"></i>
//               </button>
//             </div>

//             <!-- Heading -->
//             <a data-toggle="collapse" data-parent="#accordionWrapper" href="#collapseEventlist" aria-expanded="true" aria-controls="collapseEventlist">
//               <h5 class="mt-1 mb-0">
//                 <span id="guestName${i}">${data[i].name}</span>
//                 <i class="fas fa-angle-down rotate-icon"></i> <!-- This icon is not working :( -->
//               </h5>
//             </a>
//           </div>

//           <!-- Card body -->
//           <div id="collapseEventlist${i}" class="collapse" role="tabpanel" aria-labelledby="headingEventList" data-parent="#accordionWrapper">
//             <div class="card-body">
//               <p>${data[i].location}</p>
//             </div>
//           </div>
//         </div>`
//       );
//     }
//   });
// }

// $(eventList).click(function () {
//   let userSelection = target.attr();
//   window.location.pathname = "/event.html";
//   module.exports = userSelection;
// });

// loadEvents();