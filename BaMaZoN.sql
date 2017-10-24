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
VALUES ("Book", "Books", 10.00, 100);

-- 4. Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table). 
