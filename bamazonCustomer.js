// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Load the NPM Package for mysql
var mysql = require("mysql");

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


