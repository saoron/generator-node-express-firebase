/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
// Insert seed models below
var Thing = require('../api/thing/thing.model');
<% if (filters.auth) { %>var User = require('../api/user/user.model');<% } %>

// Insert seed data below
var thingSeed = require('../api/thing/thing.seed.json');

// Insert seed inserts below
Thing.find({}).remove(function() {
  Thing.create(thingSeed);
});