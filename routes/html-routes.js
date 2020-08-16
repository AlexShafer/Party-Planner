// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************
// Dependencies
// =============================================================
var path = require("path");
// Routes
// =============================================================
module.exports = function (app) {
// Each of the below routes just handles the HTML page that the user gets sent to.
// index route loads index.html
  app.get("/", function (req, res) {
    console.log("html routes is here");
    res.sendFile(path.join(__dirname, "../view/index.html"));
  });
  app.get("/event", function (req, res) {
    res.sendFile(path.join(__dirname, "../view/event.html"));
  });
  // all route loads the all.html page,
  // where all events in the db are displayed
  app.get("/all", function (req, res) {
    res.sendFile(path.join(__dirname, "../view/event-search.html"));
  });

  // add route loads the add.html page,
  // where users can enter new events to the db
  app.get("/add", function (req, res) {
    res.sendFile(path.join(__dirname, "../view/event-create.html"));
  });

  app.get("/addGuest", function (req, res) {
    res.sendFile(path.join(__dirname, "../view/guest-create.html"));
  });



};