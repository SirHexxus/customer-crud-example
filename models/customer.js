/** @format */

// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const customer = {
  all: (cb) => {
    orm.selectAll((res) => cb(res));
  },
  insert: (newCustomer, cb) => {
    orm.insertOne(newCustomer, (res) => cb(res));
  },
  update: (id, column, value, cb) => {
    //  FOR DEBUGGING
    // console.log('customer.js update', {id, column, value});
    orm.updateOne(id, column, value, (res) => cb(res));
  },
  delete: (id, cb) => {
    orm.deleteOne(id, (res) => cb(res));
  }
};

// Export the database functions for the controller (customers_controller.js).
module.exports = customer;
