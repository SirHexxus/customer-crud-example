/** @format */

//
const express = require('express');
const router = express.Router();

// Import the model (customer.js) to use its database functions.
const customer = require('../models/customer.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
  customer.all((data) => {
    const queryReturn = {
      customers: data
    };
    console.info(queryReturn);
    res.render('index', queryReturn);
  });
});

router.post('/api/customers', (req, res) => {
  const { name, busAddress, billAddress, contact, rate } = req.body;
  customer.insert(
    {
      name,
      active: true,
      busAddress,
      billAddress: billAddress || busAddress,
      contact,
      rate: rate || 59.9
    },
    (result) => {
      // Send back the ID of the new customer
      res.json({ id: result.insertId });
    }
  );
});

router.put('/api/customers/:id', function (req, res) {
  //  FOR DEBUGGING
  // console.log('customers_controller.js router.put', {id: req.params.id});
  // console.log('customers_controller.js router.put', {
  //   reqBody: req.body
  // });
  // console.log('customers_controller.js router.put', {
  //   reqBody: req.body.active_customer
  // });
  customer.update(
    req.params.id,
    Object.keys(req.body)[0],
    req.body.active_customer,
    (result) => {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

router.delete('/api/customers/:id', function (req, res) {
  //  FOR DEBUGGING
  // console.log('customers_controller.js router.delete', { id: req.params.id });

  customer.delete(req.params.id, (result) => {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
