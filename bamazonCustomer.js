// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Load the NPM Package for mysql
var mysql = require("mysql");

// Load the NPM Package console.table
var consoleTable = require("console.table")




console.log(`Welcome to BaMaZon! 

`);


var questions = [{
    name: "items",
    type: "list",
    message: " Welcome to BaMaZon! Here are some items you can buy: ",
    choices: ["Leonardo Da Vinci book $10", "Sony A7R $3198", "Baby Monkey toy $10", "Fire Stick $10", "Super Mario Odyssey game $10", "Wonder Woman the movie $10", "Fujifilm INSTAX $10", "T-rex Inflatable Costume $10", "Goodnight Moon $7", "Nintendo Switch $10"]
  },
  {
    name: "quantity",
    type: "input",
    message: "How many would you like to buy?",

  }
];

inquirer.prompt(questions).then(function (answers) {
  console.log('\n Order receipt: \n');

  console.log('Item: ' + answers.items);
  console.log('   ');
  console.log('Quantity: ' + answers.quantity);


});


// Function that gets data from mysql database.
function bamazonSQL() {

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



  connection.connect(function (err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }

    // console.log('connected as id ' + connection.threadId);
  });

  connection.query('SELECT * FROM products', function (error, results, fields) {
    if (error) throw error;
    // mysql results
    console.log('Product ID: ' + results[0].id);
    console.log('Product Name: ' + results[0].product_name);
    console.log('Department Name: ' + results[0].department_name);
    console.log('Product Price: $' + results[0].price);
    console.log('Stock Quantity: ', results[0].stock_quantity);


  });

  connection.end();

}

// bamazonSQL();