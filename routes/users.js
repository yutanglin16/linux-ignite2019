var express = require('express');
var router = express.Router();
var people = require("../animal.json");

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get("/", (req, res) => {
  res.render("users", {
    title: "Adopt a Furry Friend",
    people: people.profiles
  });
});

module.exports = router;
