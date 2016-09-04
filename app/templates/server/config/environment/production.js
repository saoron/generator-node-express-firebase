'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:       process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

  // Server port
  port:     process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            8080,

  // Firebase connection options
  firebase: {
      databaseURL: "https://<%= _.slugify(appname) %>.firebaseio.com",
      serviceAccount: "<%= _.slugify(appname) %>/prod.json"
  }
};