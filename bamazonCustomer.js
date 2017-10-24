// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Load the NPM Package for mysql
var mysql = require("mysql");

var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : '',
  database : 'BaMaZoN_DB'
  
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});
 
connection.query('SELECT * FROM products', function (error, results, fields) {
  if (error) throw error;
  console.log('We have this much in stock: ', results[0].stock_quantity);
});
 



// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we create a basic text prompt. Each question is an object in the array.
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


  connection.end();


  
  // 5. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale. 
  // npm install console.table --save
  // SELECT * FROM products
  
  // 6. The app should then prompt users with two messages.
  
  //    * The first should ask them the ID of the product they would like to buy. Prompt for id
  //    * The second message should ask how many units of the product they would like to buy. Prompt for quantity
  
  // 7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
  
  //    * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.
  
  // 8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
  //    * This means updating the SQL database to reflect the remaining quantity.
  //    * Once the update goes through, show the customer the total cost of their purchase.
  
  // - - -
  
  // * If this activity took you between 8-10 hours, then you've put enough time into this assignment. Feel free to stop here -- unless you want to take on the next challenge.
  