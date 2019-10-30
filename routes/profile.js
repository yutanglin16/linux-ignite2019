var express = require('express');
var router = express.Router();
var people = require("../animal.json");
var indexRouter = require('./index');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get("/", (req, res) => {
  const person = people.profiles.find(p => p.id === req.query.id);
  console.log("Hello, " + person.firstname);
  if (person.lastname == 'Alpaca') {
    // setImmediate(() => { next(new Error('woops')); });
    res.status(400).send('Bad Request')
  }
  else {
    res.render("profile", {
      title: `About ${person.firstname} ${person.lastname}`,
      person
    });
  }
    
});

module.exports = router;
