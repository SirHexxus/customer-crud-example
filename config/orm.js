// *********************************************************************************
// orm.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
const connection = require("./connection.js");

// ORM
// =============================================================

const tableName = "burgers";

const orm = {
    // SELECTS all entries from the given table
    selectAll: (callback) => {
        const s = "SELECT * FROM " + tableName;

        connection.query(s, function(err, result) {
            if(err) throw err;
            callback(result);
        });
    },

    // INSERT INTO given table VALUES (new burger)
    insertOne: (burger, callback) => {
        const s = "INSERT INTO " + tableName + " (burger_name, devoured) VALUES (?,?)";

        connection.query(s, [burger.name, burger.eaten], (err, result) => {
            if(err) throw err;
            callback(result);
        });
    },

    // INSERT INTO given table VALUES (new burger)
    updateOne: (name, eaten, callback) => {
        const s = "UPDATE " + tableName + " SET devoured = ? WHERE burger_name = ?";

        connection.query(s, [eaten, name], (err, result) => {
            if(err) throw err;
            callback(result);
        });
    }
};

module.exports = orm;
