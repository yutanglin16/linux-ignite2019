var express = require('express');
var router = express.Router();
var people = require("../animal.json");
var isHealthy = require("./healthMethods").isHealthy;

/* GET healthstatus. */

router.get('/', function(req, res, next) {
    if (isHealthy() == true) {
        const msg = "App is healthy 👍."
        console.log(msg);
        // res.status(200).send(msg);
        res.status(200).json(msg);
    } else {
        const msg = "App is unhealthy 👎.";
        console.warn(msg)
        // res.status(500).send(msg);
        res.status(500).json(msg);
    }
});

module.exports = router;
