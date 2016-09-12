'use strict';


var firebase = require("firebase");
var validator = require('validator');


var config = require('../../config/environment');


// Get list of <%= name %>s
exports.index = function(req, res) {

  res.json([]);

};



/* 
* Example 
*/

// exports.index = function(req, res) {

// 	var token = (req.param('token')) 



// 	firebase.auth().verifyIdToken(token).then(function(decodedToken) {
// 	    var uid = decodedToken.uid;
// 	    var db = firebase.database();
// 	    var ref = db.ref("userData").child(uid);


// 	    ref.once("value", function(snapshot) {
// 	    	//output the data
// 	    	if (snapshot.val())
// 	    		res.json({status: 1, userObject: snapshot.val()});
// 	    	else
// 	    		res.json({status: 0});
// 	    });

// 	}).catch(function(error) {
// 	    // Handle error
// 	 	var ret = {'status': 0};

// 		if (config.env == 'development'){
// 			ret['info'] = error;
// 		}
// 		res.json(ret);
// 	});





// };