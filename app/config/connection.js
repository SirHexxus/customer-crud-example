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
    host: 'localhost',
    port: 3306,
    user: 'baf675a5934e51',
    password: '398dedf3',
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
