-- Clear out any existing database that matches the name, so that we don't have overlap --
DROP DATABASE IF EXISTS y5c0lsa5ara5euml;

-- Create database --
CREATE DATABASE y5c0lsa5ara5euml;

-- Switch to or use the `y5c0lsa5ara5euml` --
USE y5c0lsa5ara5euml;

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