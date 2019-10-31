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

        connection.query(s, (err, result) => {
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
    updateOne: (id, eaten, callback) => {
        const s = "UPDATE " + tableName + " SET devoured = ? WHERE id = ?";
        //  FOR DEBUGGING
        // console.log('orm.js ' + id);
        // console.log('orm.js ' + eaten);
        connection.query(s, [eaten, id], (err, result) => {
            if(err) {
                console.log(err);
                return result;      //.status(500).end()
            }
            else if (result.changedRows === 0) {
                console.log('changed nothing');
                return result;      //.status(404).end()
            }
            //  FOR DEBUGGING
            // console.log(result);
            callback(result);       //.status(200).end()
        });
    }
};

module.exports = orm;
