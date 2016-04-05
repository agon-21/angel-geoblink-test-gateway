'use strict';

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
        res.status(200).json({Businesses: 'Businesses'});
    }
    
};
