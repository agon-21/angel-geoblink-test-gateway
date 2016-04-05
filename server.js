/**
 * Created by angelgonzalez on 4/5/16.
 */
var express = require('express');
var swaggerize = require('swaggerize-express');

var PORT = process.env.NODE_PORT || 3000;
var app = express();

app.use(swaggerize({
    api: require('./config/gateway.swagger.json'),
    docspath: '/api-docs',
    handlers: './handlers'
}));

app.listen(PORT, function(){
    console.log('Server listening at port ' + PORT)
})