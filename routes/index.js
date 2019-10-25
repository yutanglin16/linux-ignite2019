var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next) {
  console.error("New 403");
  setImmediate(() => { next(new Error('woops')); });
  //res.status(403).send('Bad Request')
});

module.exports = router;
