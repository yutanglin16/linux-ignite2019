var express = require('express');
var router = express.Router();
var people = require("../animal.json");

/* GET healthstatus. */

router.get('/', function(req, res, next) {
    const person = people.profiles[0];
    if (person != null) {
        console.log("App is healthy 👍.")
        res.status(200);
    } else {
        console.warn("App is unhealthy 👎.")
        res.status(500);
    }
});

module.exports = router;
