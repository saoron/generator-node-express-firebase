# Node Express Firebase Stack generator

> Yeoman generator for creating FEN stack applications, using Firebase, Express, and Node - lets you quickly set up a project following best practices.

> generator-node-express-mongo originated from generator-angular-fullstack v2.1.1. Based on [DaftMonk/generator-angular-fullstack](https://github.com/DaftMonk/generator-angular-fullstack) and [Liam-Williams/generator-node-express-mongo](https://github.com/Liam-Williams/generator-node-express-mongo)

Source code: https://github.com/saoron/generator-node-express-firebase

## Usage

Install `generator-node-express-firebase`:
```
npm install -g generator-node-express-firebase
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run `yo node-express-firebase`, optionally passing an app name:
```
yo node-express-firebase [app-name]
```

Run `grunt` for building, `grunt serve` for preview.


## Supported Configurations

- None

## Generators

Available generators:


* Generates a new API endpoint.

```bash
yo node-express-firebase:endpoint message
[?] What will the url of your endpoint be? /api/messages
```

Produces:

    server/api/message/index.js
    server/api/message/message.spec.js
    server/api/message/message.controller.js




## Testing

Running `grunt test` will run the server unit tests with karma and mocha.



## Environment Variables

Keeping your app secrets and other sensitive information in source control isn't a good idea. To have grunt launch your app with specific environment variables, add them to the git ignored environment config file: `server/config/local.env.js`.

## Project Structure

Overview

    -── server
        ├── api                 - Our apps server api
        ├── config              - Where we do the bulk of our apps configuration
        │   └── local.env.js    - Keep our environment variables out of source control
        │   └── environment     - Configuration specific to the node environment


An example server component in `server/api`

    thing
    ├── index.js                - Routes
    ├── thing.controller.js     - Controller for our `thing` endpoint
    └── thing.spec.js           - Test

## Contribute

When submitting an issue, please follow the [guidelines](https://github.com/yeoman/yeoman/blob/master/contributing.md#issue-submission). Especially important is to make sure Yeoman is up-to-date, and providing the command or commands that cause the issue.

When submitting a bugfix, try to write a test that exposes the bug and fails before applying your fix. Submit the test alongside the fix.

When submitting a new feature, add tests that cover the feature.

See the `travis.yml` for configuration required to run tests.

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
