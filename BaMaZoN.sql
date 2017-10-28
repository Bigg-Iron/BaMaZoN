DROP DATABASE IF EXISTS BaMaZoN_DB;

CREATE DATABASE BaMaZoN_DB;

USE BaMaZoN_DB;

CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Leonardo da Vinci", "Books", 10.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Baby Monkey", "Toys & Games", 10.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fire Stick", "Electronics", 10.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fujifilm INSTAX", "Camera & Photo", 10.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Super Mario Odyssey", "Video Games", 10.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("T-rex Inflatable Costume", "Clothes", 10.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wonder Woman", "Movies & TV", 10.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nintendo Switch", "Video Games", 10.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sony A7R", "Camera & Photo", 3198.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Goodnight Moon", "Books", 7.19, 100);


