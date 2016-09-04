/**
 * Main application routes
 */

'use strict';

var path = require('path');
var config = require('./config/environment');
var firebase = require("firebase");

//initlize firebase
firebase.initializeApp({
  databaseURL: config.firebase.databaseURL,
  serviceAccount: config.firebase.serviceAccount
});



module.exports = function(app) {

  // Insert routes below
  app.use('/api/things', require('./api/thing'));
  <% if (filters.auth) { %>app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));
  <% } %>

};
