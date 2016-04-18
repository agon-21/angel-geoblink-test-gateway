'use strict';
var data = require('../../../data/data.json');
var jsonfile = require('jsonfile');
var path = require('path');

var fileName = path.resolve('./data/data.json');
/**
 * Operations on /businesses/{businessId}/address
 */
module.exports = {
    
    /**
     * Update address for a given business
     * parameters: businessId, businessInfo
     * produces: 
     */
    put: function (req, res, next) {
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                if (data[key].city === req.body.city) {
                    for (var businessKey in data[key].businesses) {
                        if (data[key].businesses[businessKey].id === req.params.businessId) {
                            data[key].businesses[businessKey].address = req.body.newAddress;
                            jsonfile.writeFile(fileName, data, function (err) {
                                next(err);
                                return res.status(200).send('OK');
                            });
                        }
                    }
                }
            }
        }
        //return res.status(200).send('Noting to update')
    }
    
};
