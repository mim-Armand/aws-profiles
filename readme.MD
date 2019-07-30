# Get-AWS-Profiles

> Returns the list of AWS profiles available on the local machine using AWS-SDK native private methods.


# Why?

In one of my recent projects ( The [Log-Gage!](https://github.com/mim-Armand/log-gage) ) I needed to get a list of available AWS profiles from the local machine, after studying AWS-SDK, I realized that there are private methods available to do this on the official SDK but of-course none was exposed ( For understandable reasons I guess ), so I wrote this very light shell-package to surface those useful methods, so if you, like me, were extending AWS tools or creating a new one can leverage the existing SDK and have your code-base more focused on what it does.

## Getting Started

This Module and its main dependency ( AWS-SDK ) rely on node APIs and will not work in a browser.

### Installing

```bash
npm i --save get-aws-profiles
```

### Usage
First require / import it:
```javascript
const awsProfiles = require('get-aws-profiles');
```

#### get( ):
returns the whole credentials object;
```javascript
console.log( awsProfiles.get() );
/* output format:
{
    default: {aws_access_key_id: 'aws_access_key_id', aws_secret_access_key: 'aws_secret_access_key'},
    work: {aws_access_key_id: 'aws_access_key_id', aws_secret_access_key: 'aws_secret_access_key'},
    mim: {aws_access_key_id: 'aws_access_key_id', aws_secret_access_key: 'aws_secret_access_key'},
    ...
}
 */
```

#### use( ):
Then you can use the `use` method to get a `credentials` object that you can pass to the `AWS.config`. You just need to pass the name of one of the profiles you get from the `get` method:
```javascript
AWS.config.credentials = awsProfiles.use('profile_name');
/* output format:
 {
  expired: false,
  expireTime: null,
  refreshCallbacks: [],
  accessKeyId: 'xxx',
  sessionToken: undefined,
  filename: undefined,
  profile: 'default',
  disableAssumeRole: false,
  preferStaticCredentials: false,
  tokenCodeFn: null,
  httpOptions: null }
 */
```

#### getDefaultFilepath( ):
returns the path to the credentials file in the current system/os:
```javascript
console.log(awsProfiles.getDefaultFilepath());
// output format: "/Users/mimarmand/.aws/credentials"
```


#### getProfile( ):
returns the credentials of the passed profile name:
```javascript
console.log(awsProfiles.getProfile()); // defaults to default!
// output format: { aws_access_key_id: 'xxxx', aws_secret_access_key: 'xxxx' }
```

## Built With

* [AWS-SDK](https://aws.amazon.com/sdk-for-node-js/) - AWS SDK for Nodejs and javascript


## Authors

* **mim Armand** - *Armand.eu* - [LinkedIn](https://www.linkedin.com/in/3dots/)


## Alternatives:

If you'd prefer to not use this/a package you could instead do:
```javascript
const SharedIniFile = require('aws-sdk/lib/shared_ini');
const sharedIniFile = new SharedIniFile();
const awsProfiles   = sharedIniFile.getProfiles();
console.log( awsProfiles );

```
This should work with the current version of the SDK and that's essentially how it's done in the package as well.
I personally prefer to have this done using a separate package/module ( hence the reason I created it ).
