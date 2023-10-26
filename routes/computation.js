var express = require('express');
var router = express.Router();

/* Math.log2 function of X */
router.get('/', function(req, res, next) {
  var rand = Math.random()* 100;
  var x = rand;

  if (req.query.x !== undefined) {
    x = parseFloat(req.query.x);
  }

  var result = Math.log2(x);
  var output = `Math.log2(${x}) is ${result}`;
  
  res.render('computation', { title: output });
});

module.exports = router;