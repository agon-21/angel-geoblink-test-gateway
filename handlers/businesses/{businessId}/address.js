'use strict';

/**
 * Operations on /businesses/{businessId}/address
 */
module.exports = {
    
    /**
     * Update address for a given business
     * parameters: businessId
     * produces: 
     */
    put: function (req, res) {
        res.status(200).send('Address updated for the business');
    }
    
};
