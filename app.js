// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "What is your name?",
      name: "username"
    }
  ])

  .then(function(inquirerResponse) {
      console.log(`
      Welcome to BaMaZoN, ${inquirerResponse.username}!
      `);

  });
