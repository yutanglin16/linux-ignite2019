
var healthy = true;

function isHealthy() {
    return healthy;
}

function setHealth(newHealth) {
    healthy = newHealth;
}

module.exports.isHealthy = isHealthy;
module.exports.setHealth = setHealth;

