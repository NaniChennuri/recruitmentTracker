var express = require('express');
var router = express.Router();
const skills = require('../services/skillsData');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await skills.getData());
  } catch (err) {
    console.error("Error while getting Data", err.message);
    next(err);
  }
});

router.post('/', async function(req, res, next) {
  try {
    res.json(await skills.postData(req.body));
  } catch(err) {
    console.error("Error while updating Data", err.message);
    next(err);
  }
});

module.exports = router;
