// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
  app.get("/api/Events", function (req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Event.findAll({
      include: [db.Guestlist]
    }).then(function (dbEvent) {
      res.json(dbEvent);
    });
  });

  // Search for Specific Event (or all Events) then provides JSON
  app.get("/api/:Events?", function (req, res) {
    if (req.params.Events) {
      // Display the JSON for ONLY that Event.
      // (Note how we're using the ORM here to run our searches)
      db.Event.findOne({
        where: {
          routeName: req.params.Events
        }
      }).then(function (result) {
        return res.json(result);
      });
    } else {
      db.Event.findAll().then(function (result) {
        return res.json(result);
      });
    }
  });

  // Creating new Event
  app.post("/api/event-create", function (req, res) {
    const newEvent = {
      name: req.body.eventName,
      location: req.body.inputVenue,
      address: req.body.eventAddress,
      city: req.body.inputCity,
      state: req.body.inputState,
      zipcode: req.body.inputZip,
      theme: req.body.eventDescription,
      date: req.body.inputDate,
      time: req.body.inputTime
    };
    db.Event.create(newEvent).then(function (dbEvent) {
      res.json(dbEvent);
    });
  });

  // Creating Guest List
  app.post("/api/guest-create", function (req, res) {
    const eventId = req.query.event_id;

    console.log(eventID);

    const guest = req.body;
    db.Guestlist.create({
      name: guest.guestName,
      email: guest.guestEmail,
      phoneNumber: guest.guestPhoneNumber,
      EventId: eventId
    }).then(function (dbGuestlist) {
      res.json(dbGuestlist);
    });
  });

  // Search for Specific Guestlist (or all Guestlists) then provides JSON
  app.get("/api/:Guestlists?", function (req, res) {
    if (req.params.Guestlists) {
      // Display the JSON for ONLY that Guestlist.
      // (Note how we're using the ORM here to run our searches)
      Guestlist.findOne({
        where: {
          routeName: req.params.Guestlists
        }
      }).then(function (result) {
        return res.json(result);
      });
    } else {
      Guestlist.findAll().then(function (result) {
        return res.json(result);
      });
    }
  });

  // If a user sends data to add a new Guestlist...
  app.post("/api/guest-create", function (req, res) {
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

  app.get("/api/:Suppliess?", function (req, res) {
    if (req.params.Suppliess) {
      // Display the JSON for ONLY that Guestlist.
      // (Note how we're using the ORM here to run our searches)
      Supplies.findOne({
        where: {
          routeName: req.params.Suppliess
        }
      }).then(function (result) {
        return res.json(result);
      });
    } else {
      Supplies.findAll().then(function (result) {
        return res.json(result);
      });
    }
  });

  // If a user sends data to add a new Guestlist...
  app.post("/api/supplies-create", function (req, res) {
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
