CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
  id INT(10) NOT NULL AUTO INCREMENT,
  burger_name STRING(25) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);