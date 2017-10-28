// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Load the NPM Package for mysql
var mysql = require("mysql");

// Load the NPM Package console.table
var consoleTable = require("console.table")



// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "",
  database: "BaMaZoN_DB"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});


// Quantity function
function howMany() {
  inquirer
    .prompt({
      name: "quantity",
      type: "input",
      message: "How many would you like to buy?",

    })
    .then(function (inquirerResponse) {


    });


}



// function which prompts the user for what action they should take
function start() {
  inquirer
    .prompt({
      name: "displayItems",
      type: "list",
      message: " Welcome to BaMaZon! Here are some items you can buy: ",
      choices: ["Leonardo Da Vinci", "Sony A7R", "Baby Monkey", "Fire Stick", "Super Mario Odyssey", "Wonder Woman","Fujifilm INSTAX", "T-rex Inflatable Costume", "Goodnight Moon", "Nintendo Switch"]
    })
    .then(function (answer) {
      
      if (answer.displayItems === "Baby Monkey") {
        console.log('The Baby Monkey costs $33');
        howMany();
        
        

      } else if (answer.displayItems === "Fire Stick") {
        console.log('The Amazon Fire Stick costs $50');

      } else if (answer.displayItems === "Super Mario Odyssey") {
        console.log('The game Super Mario Odyssey costs $60');

      } else if (answer.displayItems === "Wonder Woman") {
        console.log('The movie Wonder Woman costs $20');

      } else if (answer.displayItems === "Sony A7R") {
        console.log('The Sony A7R costs $3200');

      } else if (answer.displayItems === "Leonardo Da Vinci") {
        console.log('The Book Leonardo Da Vinci costs $5');

      } else if (answer.displayItems === "Fujifilm INSTAX") {
        console.log('Fujifilm INSTAX costs $70');

      } else if (answer.displayItems === "Nintendo Switch") {
        console.log('The Nintendo Switch costs $350');

      } else if (answer.displayItems === "T-rex Inflatable Costume") {
        console.log('The T-rex costume costs $40')

      } else if (answer.displayItems === "Goodnight Moon") {
        console.log('The book goodnight moon costs $7.19');
      
      } else         

        console.log('Please choose a valid product');

    });
}



// // Create a "Prompt" with a series of questions.
// inquirer
//   .prompt([
//     // Here we create a basic text prompt. Each question is an object in the array.
//     {
//       type: "input",
//       message: "What is your name?",
//       name: "username"
//     },
//     {
//       type: "input",
//       message: "What item are you looking for?",
//       name: "product_name"
//     }
//   ])

//   .then(function (inquirerResponse) {
//     console.log(`
//   Welcome to BaMaZoN, ${inquirerResponse.username}!
//   `);

//     console.log(`Were you looking for this item? ${inquirerResponse.product_name} `)

//   });



// connection.connect(function (err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }

//   console.log('connected as id ' + connection.threadId);
// });

// connection.query('SELECT * FROM products', function (error, results, fields) {
//   if (error) throw error;
//   console.log('We have this much in stock: ', results[0].stock_quantity);
// });

// connection.end();


// // console.table package
// console.table([{
//   product: 'book',
//   price: 10,
//   quantity: 100
// }, {
//   product: 'banana',
//   price: 1,
//   quantity: 200
// }]);



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