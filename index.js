/* jshint node: true */
/*jshint esversion: 6 */
const AWS = require('aws-sdk');
const path = require('path');
const SharedIniFile = require('aws-sdk/lib/shared-ini').iniLoader;
SharedIniFile.clearCachedFiles()

const getHomeDir = () => {
	var env = process.env;
	var home = env.HOME ||
		env.USERPROFILE ||
		(env.HOMEPATH ? ((env.HOMEDRIVE || 'C:/') + env.HOMEPATH) : null);

	if (home) return home;

	if (typeof os.homedir === 'function') return os.homedir();

	throw AWS.util.error(new Error('Cannot load credentials, HOME path not set'));
}

const get = () => SharedIniFile.loadFrom();
const use = (profile_name) => new AWS.SharedIniFileCredentials({profile: profile_name });
const getDefaultFilepath = () => path.join(getHomeDir(), '.aws', 'credentials');
const getProfile = (profile_name = 'default') => SharedIniFile.loadFrom()[profile_name];

module.exports = {
	get,
	use,
	getProfile,
	getHomeDir,
	getDefaultFilepath
};