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
  console.log('Showing profile: ' + person.firstname + ' ' + person.lastname);
  if (person.lastname == 'Alpaca') {
    console.error("Error 404 -- " + person.firstname + ' ' + person.lastname + ' not found.');
    res.render("error", {
      message: 'Sorry, no ' + person.firstname + ' ' + person.lastname + ' found.',
      error: {
        status: '404 Error',
        stack: person.firstname + ' ' + person.lastname + ' has found a new home.'
      }
    });
    res.status(404);
  }
  else {
    res.render("profile", {
      title: `About ${person.firstname} ${person.lastname}`,
      person
    });
  }
    
});

module.exports = router;
