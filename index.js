/* jshint node: true */
/*jshint esversion: 6 */
const AWS = require('aws-sdk');
const SharedIniFile = require('aws-sdk/lib/shared_ini');
exports.get = function get(){
	var results  = [];
	try{ results = new SharedIniFile().getProfiles(); }
	finally{ return results; }
}
exports.use = function use(profile_name){
	return new AWS.SharedIniFileCredentials({profile: profile_name});
}