// Define const to be used for application
const fs = require("fs");
const inquirer = require("inquirer");

// Array of questions for user
inquirer
  .prompt([
    {
        type: "input",
        message: "Who would you like to invite?",
        name: "guests"
      }

// Need a function to either take in a CSV file or ask for guest names over and over again
// Or give the user an option to add manually vs. CSV

  ])

  // function to write html file contents
  .then(function (response) {
    const guestListFile = 

    `${response.guests}
    
`

    fs.writeFile("guestlist.html", guestListFile, function (err) {
      if (err) {
        return console.log(err);
      }
    });
  });
