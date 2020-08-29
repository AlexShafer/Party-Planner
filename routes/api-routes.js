// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
  app.get("/api/events", function (req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    let name = req.query.name;
    let query = {
      include: [db.Guestlist]
    };
    if (name) {
      query.where = { name };
    }
    db.Event.findAll(query).then(function (dbEvent) {
      res.json(dbEvent);
    });
  });

  app.post("/api/events", function (req, res) {
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

  // Search for Specific Event (or all Events) then provides JSON
  app.get("/api/events/:id", function (req, res) {
    if (req.params.id) {
      // Display the JSON for ONLY that Event.
      // (Note how we're using the ORM here to run our searches)
      db.Event.findOne({ where: { id: parseInt(req.params.id) } }).then(function (result) {
        return res.json(result);
      });
    } else {
      db.Event.findAll().then(function (result) {
        return res.json(result);
      });
    }
  });

  // creating guest
  app.post("/api/guest-create", function (req, res) {
    const guest = req.body;
    db.Guestlist.create({
      name: guest.guestName,
      email: guest.guestEmail,
      phoneNumber: guest.guestPhoneNumber,
      EventId: guest.EventId
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

  app.get("/api/guest-list/:id", function (req, res) {
    if (req.params.id) {
      // Display the JSON for ONLY that Event.
      // (Note how we're using the ORM here to run our searches)
      db.Guestlist.findAll({ where: { EventId: parseInt(req.params.id) } }).then(function (result) {
        return res.json(result);
      });
    } else {
      db.Guestlist.findAll().then(function (result) {
        return res.json(result);
      });
    }
  });

  app.get("/api/messageBoard/:id", function (req, res) {
    if (req.params.id) {
      // Display the JSON for ONLY that Event.
      // (Note how we're using the ORM here to run our searches)
      db.messageBoard.findAll({ where: { EventId: parseInt(req.params.id) } }).then(function (result) {
        return res.json(result);
      });
    } else {
      db.messageBoard.findAll().then(function (result) {
        return res.json(result);
      });
    }
  });

  app.post("/api/messageBoard/", function (req, res) {
    db.messageBoard.create({
      author: req.body.author,
      message: req.body.message,
      EventId: req.body.EventId
    }).then(function (dbMessageBoard) {
      res.json(dbMessageBoard);
    });
  });

  // app.get("/api/:Suppliess?", function (req, res) {
  //   if (req.params.Suppliess) {
  //     // Display the JSON for ONLY that Guestlist.
  //     // (Note how we're using the ORM here to run our searches)
  //     Supplies.findOne({
  //       where: {
  //         routeName: req.params.Suppliess
  //       }
  //     }).then(function (result) {
  //       return res.json(result);
  //     });
  //   } else {
  //     Supplies.findAll().then(function (result) {
  //       return res.json(result);
  //     });
  //   }
  // });

  // // If a user sends data to add a new Guestlist...
  // app.post("/api/supplies-create", function (req, res) {
  //   // Take the request...
  //   var Supplies = req.body;

  //   // Create a routeName

  //   // Using a RegEx Pattern to remove spaces from Guestlist.name
  //   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  //   let routeName = Supplies.name.replace(/\s+/g, "").toLowerCase();

  //   // Then add the Guestlist to the database using sequelize
  //   Supplies.create({
  //     routeName: routeName,
  //     food: Guestlist.food,
  //     drink: Guestlist.drink,
  //     other: Guestlist.other,

  //   });
  //   res.status(204).end();
  // });
};
