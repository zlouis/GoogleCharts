CREATE DATABASE googlechart_db; #creates database
USE googlechart_db;

# If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS googlechart_db;

CREATE TABLE products (
ItemID INT AUTO_INCREMENT NOT NULL,
Product VARCHAR (45) NOT NULL,
Quantity INT NOT NULL,
RarityValue INT NOT NULL,
Class VARCHAR(45) NOT NULL,
PRIMARY KEY(ItemID)
);
