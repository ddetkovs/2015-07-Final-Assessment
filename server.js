var express = require('express');
var mongoose = require('mongoose');

var app = express();

// mongoose.connect('mongodb://localhost/shortly'); // connect to mongo database named shortly

var api = require('./routes/routes.js');

app.set('port', process.env.PORT || 3000);

app.use('/', express.static(__dirname + '/public'));

app.use('/api', api);

var server = app.listen(function() {
  console.log('Server is listening on ', server.address().port);
});

module.exports = app;
