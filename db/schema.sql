-- Switch to or use the `y5c0lsa5ara5euml` --
USE y5c0lsa5ara5euml;

DROP TABLE IF EXISTS burgers;

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