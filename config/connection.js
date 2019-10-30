// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

//  Requiring mysql and dotenv packages
const mysql = require("mysql");
const dotenv = require('dotenv').config();

//  Listens for Configuration Errors in `dotenv`
if(dotenv.error) {
    console.log(dotenv.error);
}

//  Setting up our connection information
const source = {
  localhost: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'burgers_db'
  }
};


//  Creating our connection
const connection = mysql.createConnection(source.localhost);


//  Connecting to the database.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id# " + connection.threadId);
});

//  Exporting our connection
module.exports = connection;
