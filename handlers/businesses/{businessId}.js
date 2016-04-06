'use strict';
var data = require('../../data/data.json');
var jsonfile = require('jsonfile');
var path = require('path');

var fileName = path.resolve('./data/dataa.json');
/**
 * Operations on /businesses/{businessId}
 */
module.exports = {
    /**
     * Remove a business from the list given a business Id
     * parameters: businessId
     * produces:
     */
    delete: function (req, res, next) {
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                for (var businessKey in data[key].businesses) {
                    if(data[key].businesses.hasOwnProperty(businessKey)) {
                        if (data[key].businesses[businessKey].id === req.params.businessId) {
                            data[key].businesses.splice(businessKey, 1);
                            jsonfile.writeFile(fileName, data, function (err) {
                                next(err);
                                return res.status(200).send('Business successfully deleted');
                            });
                        }
                    }
                }
            }
        }
    }
};