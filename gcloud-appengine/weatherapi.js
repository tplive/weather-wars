
module.exports = {
    getTemperature: function (searchTerm) {
        // TODO Implement actual function
        // Will look up temperature at "searchTerm" and return the
        // forecast temperature for that particular site
        return Math.random() * 60 * (Math.random() < 0.5 ? -1 : 1);
    },
    diffTwoTemperatures: function(a, b) {
        // Compare two double numbers, and return the difference
        return Math.abs(a-b);
    }
}
