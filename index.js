// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const writeToFile = require("./src/generate-site.js");
// TODO: Create an array of questions for user input
const promptUser = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your program?",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a brief description of your program",
  },
  {
    type: "input",
    name: "installation",
    message:
      'Would you like to enter some info about yourself for an "About" section?',
    default: true,
  },
  {
    type: "input",
    name: "about",
    message: "Provide some info about yourself:",
    when: ({ confirmAbout }) => confirmAbout,
  },
];

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(promptUser)
    .then((promptData) => {
      console.log("file created");
      writeToFile("README.md", generateMarkdown(promptData));
    })
    .catch((err) => {
      console.log(err);
    });
}

// Function call to initialize app
init();
