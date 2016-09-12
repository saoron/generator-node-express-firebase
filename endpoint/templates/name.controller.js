'use strict';


var firebase = require("firebase");
var validator = require('validator');


var config = require('../../config/environment');

var <%= classedName %> = require('./<%= name %>.model');<% } %>

// Get list of <%= name %>s
exports.index = function(req, res) {<% if (!filters.mongoose) { %>
  res.json([]);<% } %><% if (filters.mongoose) { %>
  <%= classedName %>.find(function (err, <%= name %>s) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(<%= name %>s);
  });<% } %>
};<% if (filters.mongoose) { %>


