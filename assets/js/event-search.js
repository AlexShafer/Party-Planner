const db = require("./models");
const accordionWrapper = $("#accordionWrapper");

$.ajax({
  method: "GET",
  url: "/api/Events",
  data: newEvent
}).then(function () {
  // for loop w/ ajax.GET to populate list of events w/ eventList.append
  for (i = 0; i < db.Event.length; i++) {
    accordionWrapper.append(
      `<div class="card">
      <!-- Card header -->
        <div class="card-header" role="tab" id="headingEventList${i}">
        <!--Options-->
        <div class="dropdown float-left">
        <button class="btn btn-info btn-sm m-0 mr-3 p-2 dropdown-toggle" type="button" data-toggle="dropdown"
      aria-haspopup="true" aria-expanded="false">
      <i class="fas fa-pencil-alt"></i>
    </button>
  </div>

  <!-- Heading -->
  <a data-toggle="collapse" data-parent="#accordionWrapper" href="#collapseEventlist" aria-expanded="true"
    aria-controls="collapseEventlist">
    <h5 class="mt-1 mb-0">
      <span id="guestName${i}">${db.eventName}</span>
      <i class="fas fa-angle-down rotate-icon"></i> <!-- This icon is not working :( -->
    </h5>
  </a>
</div>
<!-- Card body -->
<div id="collapseEventlist${i}" class="collapse" role="tabpanel" aria-labelledby="headingEventList"
  data-parent="#accordionWrapper">
  <div class="card-body">
    <p></p>
    ${db.location}
  </div>
</div>
</div>`);
  }
}
);

$(eventList).click(function () {
  let userSelection = target.attr();
  window.location.pathname = "/event.html";
  module.exports = userSelection;
});