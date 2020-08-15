// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Event, Guestlist, Supplies = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // Search for Specific Event (or all Events) then provides JSON
  app.get("/api/:Events?", function(req, res) {
    if (req.params.Events) {
      // Display the JSON for ONLY that Event.
      // (Note how we're using the ORM here to run our searches)
      Event.findOne({
        where: {
          routeName: req.params.Events
        }
      }).then(function(result) {
        return res.json(result);
      });
    } else {
      Event.findAll().then(function(result) {
        return res.json(result);
      });
    }
  });

  // If a user sends data to add a new Event...
  app.post("/api/event-create", function(req, res) {
    // Take the request...
    const event = req.body;

    // Using a RegEx Pattern to remove spaces
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html

    let routeName = event.eventName.replace(/\s+/g, "").toLowerCase();

    // Then add the Event to the database using sequelize
    Event.create({
      name: routeName,
      location: event.inputVenue,
      theme: event.eventDescription,
      date: event.inputDate,
      time: event.inputTime
    });

    Guestlist.create({
      name: event.guestName,
      email: event.email,
      phoneNumber: event.phoneNumber
    });

    res.status(204).end();
  });

  // Search for Specific Guestlist (or all Guestlists) then provides JSON


  app.get("/api/:Guestlists?", function(req, res) {
    if (req.params.Guestlists) {
      // Display the JSON for ONLY that Guestlist.
      // (Note how we're using the ORM here to run our searches)
      Guestlist.findOne({
        where: {
          routeName: req.params.Guestlists
        }
      }).then(function(result) {
        return res.json(result);
      });
    } else {
      Guestlist.findAll().then(function(result) {
        return res.json(result);
      });
    }
  });

  // If a user sends data to add a new Guestlist...
  app.post("/api/guest-create", function(req, res) {
    // Take the request...
    var Guestlist = req.body;

    // Create a routeName

    // Using a RegEx Pattern to remove spaces from Guestlist.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    let routeName = Guestlist.name.replace(/\s+/g, "").toLowerCase();

    // Then add the Guestlist to the database using sequelize
    Guestlist.create({
      routeName: routeName,
      type: Guestlist.type,
      email: Guestlist.email,
      phoneNumber: Guestlist.phoneNumber,

    });
    res.status(204).end();
  });
  // Search for Specific Supplies (or all Suppliess) then provides JSON

  app.get("/api/:Suppliess?", function(req, res) {
    if (req.params.Suppliess) {
      // Display the JSON for ONLY that Guestlist.
      // (Note how we're using the ORM here to run our searches)
      Supplies.findOne({
        where: {
          routeName: req.params.Suppliess
        }
      }).then(function(result) {
        return res.json(result);
      });
    } else {
      Supplies.findAll().then(function(result) {
        return res.json(result);
      });
    }
  });

  // If a user sends data to add a new Guestlist...
  app.post("/api/supplies-create", function(req, res) {
    // Take the request...
    var Supplies = req.body;

    // Create a routeName

    // Using a RegEx Pattern to remove spaces from Guestlist.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    let routeName = Supplies.name.replace(/\s+/g, "").toLowerCase();

    // Then add the Guestlist to the database using sequelize
    Supplies.create({
      routeName: routeName,
      food: Guestlist.food,
      drink: Guestlist.drink,
      other: Guestlist.other,

    });
    res.status(204).end();
  });
};
