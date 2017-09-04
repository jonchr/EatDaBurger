### Schema
-- Creates database
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- Creates table
CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	burger_name VARCHAR(255) NOT NULL,
	link VARCHAR(255) NULL,
	devoured BOOLEAN DEFAULT FALSE,
	date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
