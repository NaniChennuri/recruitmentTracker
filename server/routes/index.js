var express = require('express');
var router = express.Router();
const managers = require('../services/managers');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await managers.getManagers());
  } catch (err) {
    console.error("Error while getting managers", err.message);
    next(err);
  }
});

module.exports = router;
