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
    database: process.env.DB
  }
};

const jawsDBSource = {
  jawsDB: {
    host: 'arfo8ynm6olw6vpn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'csfxw3p5rjwlpcrv',
    password: 'mq3n9iy0upzjjv0p',
    database: 'y5c0lsa5ara5euml'
  }
};

//  Creating our connection
let connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(jawsDBSource.jawsDB);
} else {
  connection = mysql.createConnection(source.localhost);
}


//  Connecting to the database.
connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id# " + connection.threadId);
});

//  Exporting our connection
module.exports = connection;
