var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/fetchData', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/updateData', function(req, res, next) {
  
});

module.exports = router;
