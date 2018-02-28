# Get-AWS-Profiles

> Returns the list of AWS profiles available on the local machine using AWS-SDK native private methods.


# Why?

In one of my recent projects ( The [Log-Gage!](https://github.com/mim-Armand/log-gage) ) I needed to get a list of available AWS profiles from the local machine, after studying AWS-SDK, I realized that there are private methods available to do this on the official SDK but of-course none was exposed ( For understandable reasons I guess ), so I wrote this very light shell-package to surface those useful methods, so if you, like me, were extending AWS tools or creating a new one can leverage the existing SDK and have your code-base more focused on what it does.

## Getting Started

This Module and its main dependency ( AWS-SDK ) rely on node APIs and will not work in a browser.

### Installing

```bash
npm install --save get-aws-profiles
```

### Usage

```javascript
const awsProfiles = require('get-aws-profiles');
console.log( awsProfiles.get() );
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
