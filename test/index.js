const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const subject = require('../index');
const SharedIniFile = require('aws-sdk/lib/shared_ini');

let validGetProfileResponse = { aws_access_key_id: 'test_id', aws_secret_access_key: 'test_secret_key' };
let validDefaultFilePath = '/Users/mim/.some/test/credentials';
let validGetProfiles = [ 'mim', 'work', 'default' ];

describe('Testing the Get AWS Profiles package!', ()=>{
    before(()=>{
        sinon.stub(SharedIniFile.prototype, "getProfiles").returns(validGetProfiles);
        sinon.stub(SharedIniFile.prototype, "getDefaultFilepath").returns(validDefaultFilePath);
        sinon.stub(SharedIniFile.prototype, "getProfile").returns(validGetProfileResponse);
    });
    beforeEach(()=>{
    });
    afterEach(()=>{
    });
    describe('Tests the Get function', ()=>{
        it('should be of the expected type',()=>{
            let result = subject.get();
            expect(result, 'returned from get method').to.be.an('array');
        });
    });
    describe('Testing the Use method',()=>{
        it('should be of the expected type', ()=>{
            let result = subject.use('default');
            expect(result, 'returned from get method').to.be.an('object');
            expect(result.profile, 'returned from use method').to.equal('default');
        });
    });
    describe('Testing the getDefaultFilepath method',()=>{
        it('should be of the expected type', ()=>{
            let result = subject.getDefaultFilepath();
            expect(result, 'returned from getDefaultFilepath method').to.be.an('string');
            expect(result, 'returned from getDefaultFilepath method').to.equal(validDefaultFilePath);
        });
    });
    describe('Testing the getProfile method',()=>{
        it('should be of the expected type', ()=>{
            let result = subject.getProfile('default');
            expect(result, 'returned from getProfile method').to.be.an('object');
            expect(result, 'returned from getProfile method').to.have.property('aws_access_key_id');
            expect(result, 'returned from getProfile method').to.have.property('aws_secret_access_key');
        });
    });
});