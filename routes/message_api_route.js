// Dependencies
// =============================================================
var Eventmessage = require("../models/event_message.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all messages
  app.get("/api/all", function(req, res) {

    // Finding all Event Messages, and then return them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    Eventmessage.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  // Add a message
  app.post("/api/new", function(req, res) {

    Eventmessage.create({
      author: req.body.author,
      body: req.body.body,
      created_at: req.body.created_at
    }).then(function(results) {
      // `results` should newly created message
      res.end();
    });

  });

};