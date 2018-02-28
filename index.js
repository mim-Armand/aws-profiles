/* jshint node: true */
/*jshint esversion: 6 */
const SharedIniFile = require('aws-sdk/lib/shared_ini');
exports.get = function get(){
    return new SharedIniFile().getProfiles();

}