'use strict';

// Development specific configuration
// ==================================
module.exports = {
    // Firebase connection options
    firebase: {
        databaseURL: "https://<%= _.slugify(appname) %>.firebaseio.com",
        serviceAccount: "<%= _.slugify(appname) %>/dev.json"
    }

};
