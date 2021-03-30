-- Switch to or use the `y5c0lsa5ara5euml` --
USE y5c0lsa5ara5euml;
-- DROP TABLE IF EXISTS burgers;
-- -- Create a `burgers` table with these fields:
-- CREATE TABLE burgers (
--     -- id: an auto incrementing int --
--     id INT AUTO_INCREMENT NOT NULL,
--     -- burger_name: a string --
--     burger_name VARCHAR(255) NOT NULL,
--     -- devoured: a boolean --
--     devoured BOOLEAN NOT NULL DEFAULT false,
--     -- Set "id" as Primary Key --
--     PRIMARY KEY(id)
-- );
DROP TABLE IF EXISTS customers;
-- Create a `customers` table with these columns:
CREATE TABLE customers (
    -- id: an auto incrementing int --
    id INT AUTO_INCREMENT NOT NULL,
    -- customer_name: a string --
    customer_name VARCHAR(255) NOT NULL,
    -- active_customer: a boolean --
    active_customer BOOLEAN NOT NULL DEFAULT false,
    -- business_address: a string --
    business_address VARCHAR(255) NOT NULL,
    -- billing_address: a string --
    billing_address VARCHAR(255),
    -- contact_name: a string --
    contact_name VARCHAR(255) NOT NULL,
    -- service_rate: a decimal of up to 6 digits, with two places past 0
    service_rate DECIMAL(6, 2) NOT NULL,
    -- Set "id" as Primary Key --
    PRIMARY KEY(id)
);