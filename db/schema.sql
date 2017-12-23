
-- deletes old db to start fresh
DROP DATABASE IF EXISTS burgers_db;
-- creates db
CREATE DATABASE burgers_db;
-- uses the db 
USE burgers_db;
-- creates the table 
CREATE TABLE burgers(
	id INTEGER NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(255) NOT NULL,
	-- set to false because all burgers start out as not eaten
	devoured BOOLEAN default false NOT NULL,
	-- time stamp
	date TIMESTAMP NOT NULL,
	
	PRIMARY KEY (id)
);