// Function that gets data from mysql database.
// 
function bamazonSQL() {


    // Load the NPM Package for mysql
    var mysql = require("mysql");

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

bamazonSQL();