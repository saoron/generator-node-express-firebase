'use strict';


var firebase = require("firebase");
var validator = require('validator');


var config = require('../../config/environment');


// Get list of <%= name %>s
exports.index = function(req, res) {

  res.json([]);

};


