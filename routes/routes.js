'use strict';

var express = require('express');
var request = require('request-promise');

var api = express.Router();

api.get('/search', function(req, res, next) {
  request({
      uri: 'http://api.giphy.com/v1/gifs/search',
      method: 'GET',
      qs: {
        api_key: 'dc6zaTOxFJmzC',
        q: 'cat',
        limit: 10
      }
    })
    .then(function(body){
      res.json(body);
    })
    .catch(function(err){
      console.error(err);
    });
});

module.exports = api;
