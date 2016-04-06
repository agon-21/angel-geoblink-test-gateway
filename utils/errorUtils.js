/**
 * Created by angelgonzalez on 4/6/16.
 */
function handleErrors(err, req, res, next) {
    try {
        if (err) {
            // Set up default response
            var status = err.status || 500;
            var response = {};
            response.error = err.name;
            response.message = err.message || 'Something went wrong';
            return res.status(status).json(response);
        }
    } catch (errFatal) {
        return res.status(500).json('Something went wrong');
    }
    next(err);
}

module.exports = {
    handleErrors: handleErrors
}