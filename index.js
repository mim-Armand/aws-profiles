/* jshint node: true */
/*jshint esversion: 6 */
const SharedIniFile = require('aws-sdk/lib/shared_ini');
exports.getAWSProfiles = function getAWSProfiles(){
    return new SharedIniFile().getProfiles();

}