var express = require('express');
var router = express.Router();
var people = require("../animal.json");

/* GET healthstatus. */

router.get('/', function(req, res, next) {
    const person = people.profiles[0];

    if (person != null) {
        const msg = "App is healthy 👍."
        console.log(msg);
        res.status(200).send(msg);
    } else {
        const msg = "App is unhealthy 👎.";
        console.warn(msg)
        res.status(500).send(msg);
    }
});

module.exports = router;
