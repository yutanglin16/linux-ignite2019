var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next) {
  console.error("Bad request");
  setImmediate(() => { next(new Error('woops')); });
  //res.status(400).send('Bad Request')
});

module.exports = router;
