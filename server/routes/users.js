var express = require('express');
var router = express.Router();
const skills = require('../services/skillsData');

/* GET users listing. */
router.get('/:id', async function(req, res, next) {
  try {
    const { id } = req.params;
    res.json(await skills.getData(id));
  } catch (err) {
    console.error("Error while getting Data", err.message);
    next(err);
  }
});

router.put('/', async function(req, res, next) {
  try {
    res.json(await skills.postData(req.body));
  } catch(err) {
    console.error("Error while updating Data", err.message);
    next(err);
  }
});

module.exports = router;
