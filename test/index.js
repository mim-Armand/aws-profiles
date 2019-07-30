const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const subject = require('../index');
const SharedIniFile = require('aws-sdk/lib/shared-ini').iniLoader;

let validDefaultFilePath = `${subject.getHomeDir()}/.aws/credentials`;
let validGetProfiles = {
    default: {aws_access_key_id: 'aws_access_key_id', aws_secret_access_key: 'aws_secret_access_key'},
    work: {aws_access_key_id: 'aws_access_key_id', aws_secret_access_key: 'aws_secret_access_key'},
    mim: {aws_access_key_id: 'aws_access_key_id', aws_secret_access_key: 'aws_secret_access_key'}
}

describe('Testing the Get AWS Profiles package!', () => {
    before(() => {
        sinon.stub(SharedIniFile, "loadFrom").returns(validGetProfiles);
    });
    beforeEach(() => {
    });
    afterEach(() => {
    });
    describe('Tests the Get function', () => {
        it('should be of the expected type', () => {
            let result = subject.get();
            expect(result, 'returned from get method').to.be.an('object');
            expect(result, 'returned from get method').to.have.property('default');
        });
    });
    describe('Testing the Use method', () => {
        it('should be of the expected type', () => {
            let result = subject.use('default');
            expect(result, 'returned from get method').to.be.an('object');
            expect(result.profile, 'returned from use method').to.equal('default');
        });
    });
    describe('Testing the getDefaultFilepath method', () => {
        it('should be of the expected type', () => {
            let result = subject.getDefaultFilepath();
            expect(result, 'returned from getDefaultFilepath method').to.be.an('string');
            expect(result, 'returned from getDefaultFilepath method').to.equal(validDefaultFilePath);
        });
    });
    describe('Testing the getProfile method', () => {
        it('should be of the expected type', () => {
            let result = subject.getProfile('default');
            expect(result, 'returned from getProfile method').to.be.an('object');
            expect(result, 'returned from getProfile method').to.have.property('aws_access_key_id');
            expect(result, 'returned from getProfile method').to.have.property('aws_secret_access_key');
        });
    });
});