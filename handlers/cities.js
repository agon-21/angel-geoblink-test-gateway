'use strict';
var data = require('../data/data.json');
var cities = [];
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
        for (var key in data){
            cities.push(data[key].city)
        }
        res.status(200).send(cities)
    }
};