'use strict';

// Test specific configuration
// ===========================
module.exports = {
    // Firebase connection options
    firebase: {
        databaseURL: "https://<%= _.slugify(appname) %>.firebaseio.com",
        serviceAccount: "<%= _.slugify(appname) %>/test.json"
    }
};