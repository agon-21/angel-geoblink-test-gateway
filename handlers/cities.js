'use strict';
var data = require('../data/data.json');

/**
 * Operations on /cities
 */
module.exports = {
    /**
     * List all the cities
     * parameters: 
     * produces: 
     */
    get: function (req, res) {
        var cities = [];
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                cities.push(data[key].city);
            }
        }
        res.status(200).send(cities);
    }
};