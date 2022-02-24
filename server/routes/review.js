var express = require('express');
const url = require('url');
var router = express.Router();
const reviews = require('../services/reviewData');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await reviews.getData(req.query));
  } catch (err) {
    console.error("Error while getting Data", err.message);
    next(err);
  }
});

module.exports = router;
