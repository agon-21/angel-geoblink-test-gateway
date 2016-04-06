/**
 * Created by angelgonzalez on 4/5/16.
 */
var express = require('express');
var swaggerize = require('swaggerize-express');
var bodyParser = require('body-parser');
var errorUtils = require('./utils/errorUtils');

var PORT = process.env.NODE_PORT || 3000;
var app = express();

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Accept, api-key, method');
    next();
};

app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(swaggerize({
    api: require('./config/gateway.swagger.json'),
    docspath: '/api-docs',
    handlers: './handlers'
}));

app.use(errorUtils.handleErrors);

//process.on('uncaughtException', function (err) {
//    process.exit(1);
//});

app.listen(PORT, function(){
    console.log('Server listening at port ' + PORT)
});