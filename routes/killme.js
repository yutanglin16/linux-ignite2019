var express = require('express');
var router = express.Router();
var server = require("../bin/www")

/* 
    More info: https://stackoverflow.com/a/36830072/10265855
    Kill the app. 
*/

router.get("/", (req, res) => {
    console.error("Oh no! 😨");
    console.error("Critical error! 💀");
    console.error("The Express server is shutting down! 💀");

    setImmediate(function(){server.emit('close')});
});

module.exports = router;
