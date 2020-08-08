// Define const to be used for application
const fs = require("fs");
const inquirer = require("inquirer");

// Enter Map keys and values to be used for list selections and choices 
const eventType = new Map([
["Birthday", "Birthday Bash!"],
["Happy Hour", "Happy Hour!"],
["Party", "Just because!"]
]);

// Array of questions for user
inquirer
  .prompt([
    {
        type: "input",
        message: "It's PARTY PLANNING TIME! What's the name of your event?",
        name: "title"
      },
      {
        type: "input",
        message: "Write a brief description of the event for your guests.",
        name: "description"
      },
      {
        type: "list",
        message: "What's the occasion?",
        name: "event",
        choices: [...eventType.keys()]
      },
      {
        type: "input",
        message: "Date the event takes place? (--/--/--)",
        name: "date"
      },
      {
        type: "input",
        message: "Where is the event taking place?",
        name: "location"
      },
      {
        type: "input",
        message: "Write a brief description of the event for your guests.",
        name: "description"
      },
      {
        type: "input",
        message: "Add image name?",
        name: "image"
      }
  ])

  // function to write html file contents
  .then(function (response) {
    const eventDetailsFile = 

    `${response.title}
    ${response.description}
    ${eventType.get(response.event)}
    ${response.date}
    ${response.location}
    
`

    fs.writeFile("event_details.html", eventDetailsFile, function (err) {
      if (err) {
        return console.log(err);
      }
    });
  });

  // Add guest list function
  