// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Load the NPM Package for mysql
var mysql = require("mysql");

// Load the NPM Package console.table
var consoleTable = require("console.table")



console.log(`Welcome to BaMaZon! 

Below are items for purchase:

`);


console.table([{
  Product: 'Leonardo Da Vinci book',
  Price: 10
}, {
  Product: 'Sony A7R',
  Price: 10
}, {
  Product: 'Fire Stick',
  Price: 10
}, {
  Product: 'Super Mario Odyssey game',
  Price: 10
}, {
  Product: 'Wonder Woman the movie',
  Price: 10
}, {
  Product: 'Fujifilm INSTAX',
  Price: 10
}, {
  Product: 'T-rex Inflatable Costume',
  Price: 10
}, {
  Product: 'Goodnight Moon',
  Price: 10
}, {
  Product: 'Nintendo Switch',
  Price: 10
}, {
  Product: 'Baby Monkey',
  Price: 10
}]);



  var questions = [{
      name: "items",
      type: "list",
      message: " Welcome to BaMaZon! Here are some items you can buy: ",
      choices: ["Leonardo Da Vinci book $10", "Sony A7R $10", "Baby Monkey toy $10 ", "Fire Stick $10 ", "Super Mario Odyssey game $10 ", "Wonder Woman the movie $10 ", "Fujifilm INSTAX $10", "T-rex Inflatable Costume $10 ", "Goodnight Moon $10 ", "Nintendo Switch $10 "]
    },
    {
      name: "quantity",
      type: "input",
      message: "How many would you like to buy?",

    }
  ];


  inquirer.prompt(questions).then(function (answers) {
    console.log('\n Order receipt: \n');
    var item = answers.items;
    var quantity = answers.quantity;

    var orderRecipt = [item,quantity];

    // console.log(orderRecipt);
    
    console.log('Item:  ' + item);
    console.log('   ');
    console.log('Quantity: ' + quantity);
    console.log('   ');

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
    // console.log(results);

    var productID = results[0].id;
    var productName = results[0].product_name;
    var department_name = results[0].department_name;
    var productPrice = results[0].price;
    var stockQuantity = results[0].stock_quantity;

    var product1 = {
      product_ID: productID,
      product_Name: productName,
      departmentName: department_name,
      product_price: productPrice,
      quantity: stockQuantity
    };

    console.log(product1);


  });

  connection.end();

}

// bamazonSQL();