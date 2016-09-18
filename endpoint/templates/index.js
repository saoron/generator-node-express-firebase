'use strict';

var express = require('express');
var controller = require('./<%= name %>.controller');

var router = express.Router();


var config = require('../../config/environment');
var firebase = require("firebase");



router.get('/', function(){

	var token = (req.param('token'))
	var uid = (req.param('uid')) 

	var testing = config.env == 'development' || config.env == 'testing';

	// if in testing or development skip Auth validation
 	if (testing){
 		controller.index(req, res)
 		return;
 	}

	firebase.auth().verifyIdToken(token).then(function(decodedToken) {

		// check that the asked UID correspond with the token or it's a admin token
	    if (!(uid == decodedToken.uid || decodedToken.admin)){

		 	var ret = {'status': 0};

			if (config.env == 'development'){
				ret['info'] = 'Conditions are not met: self-'+(uid == decodedToken.uid)+' admin-'+decodedToken.admin;
			}
			res.json(ret);
			return;
	    }else{
	    	// controller call goes here
	    	controller.index(req, res)
	    }
			

	}).catch(function(error) {
	    // Handle error
	 	var ret = {'status': 0};

		if (config.env == 'development'){
			ret['info'] = '[Auth] ' + error;
		}
		res.json(ret);
		return;
	})

});

module.exports = router;