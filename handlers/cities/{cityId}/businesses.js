'use strict';
var data = require('../../../data/data.json');
var businesses = [];
/**
 * Operations on /cities/{cityId}/businesses
 */
module.exports = {
    /**
     * List all the businesses for a given a city
     * parameters: cityId
     * produces:
     */
    get: function (req, res) {
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                if (data[key].city === req.params.cityId) {
                    return res.status(200).send(data[key].businesses);
                }
            }
        }
        return res.sendStatus(204);
    }
};