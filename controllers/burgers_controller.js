//
const express = require('express');
const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require('../models/burger.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
  burger.all((data) => {
    const queryReturn = {
      burgers: data
    };
    console.info(queryReturn);
    res.render('index', queryReturn);
  });
});

router.post('/api/burgers', (req, res) => {
  burger.insert(
    {
      name: req.body.name,
      eaten: false
    },
    (result) => {
      // Send back the ID of the new burger
      res.json({ id: result.insertId });
    }
  );
});

router.put('/api/burgers/:id', function (req, res) {
  //  FOR DEBUGGING
  // console.log('burgers_controller.js router.put', {id: req.params.id});
  // console.log('burgers_controller.js router.put', {eaten: req.body.eaten});
  burger.update(req.params.id, req.body.eaten, (result) => {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete('/api/burgers/:id', function (req, res) {
  //  FOR DEBUGGING
  // console.log('burgers_controller.js router.delete', { id: req.params.id });

  burger.delete(req.params.id, (result) => {
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
