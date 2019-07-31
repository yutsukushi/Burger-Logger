CREATE DATABASE burgers_db;

USE burgers_db;
DROP TABLE IF exists BURGERS;

CREATE TABLE burgers (
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(40) NOT NULL,
devoured BOOLEAN DEFAULT false  ,
PRIMARY KEY(id)
);

INSERT INTO burgers (burger_name) VALUES ('Bacon Cheeseburger');
INSERT INTO burgers (burger_name) VALUES ('Vegan Tofu Burger');
INSERT INTO burgers (burger_name) VALUES ('Hamburger');
