-- Clear out any existing database that matches the name, so that we don't have overlap --
DROP DATABASE IF EXISTS burgers_db;

-- Create database --
CREATE DATABASE burgers_db;

-- Switch to or use the `burgers_db` --
USE burgers_db;

-- Create a `burgers` table with these fields:
CREATE TABLE burgers (
    -- id: an auto incrementing int --
    id INT AUTO_INCREMENT NOT NULL,
    -- burger_name: a string --
    burger_name VARCHAR(255) NOT NULL,
    -- devoured: a boolean --
    devoured BOOLEAN NOT NULL DEFAULT false,
    -- Set "id" as Primary Key --
    PRIMARY KEY(id)
);