// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const writeToFile = require("./src/generate-site.js");
// TODO: Create an array of questions for user input
const promptUser = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a brief description of your project",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "How do we run your app?",
  },
  {
    type: "input",
    name: "credits",
    message: "Credits: ",
  },
  {
    type: "input",
    name: "license",
    message: "Licenses if any: ",
  },
  {
    type: "input",
    name: "contributing",
    message: "List the contributors of this project: ",
  },
  {
    type: "input",
    name: "tests",
    message: "Include any tests ran: ",
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
