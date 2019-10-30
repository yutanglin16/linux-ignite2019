var express = require('express');
var router = express.Router();
var setHealth = require("./healthMethods").setHealth;

router.get("/", (req, res) => {
    console.error("Oh no! 😨");
    console.error("Critical error! 💀");
    console.error("The app has gone unhealthy! 💀");
    setHealth(false);
    res.status(500).send("App is now unhealthy.");
});

module.exports = router;
