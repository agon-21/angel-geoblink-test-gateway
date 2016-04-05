'use strict';

/**
 * Operations on /businesses/{businessId}
 */
module.exports = {
    
    /**
     * Remove a business from the list given a business Id
     * parameters: businessId
     * produces: 
     */
    delete: function (req, res) {
        res.status(200).send('Business deleted');
    }
    
};
