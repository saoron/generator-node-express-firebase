# Node Express Mongo Stack generator

> Yeoman generator for creating MEN stack applications, using MongoDB, Express, and Node - lets you quickly set up a project following best practices.

## Diff from [DaftMonk/generator-angular-fullstack](https://github.com/DaftMonk/generator-angular-fullstack)

> generator-node-express-mongo originated from generator-angular-fullstack v2.1.1

**Removed all client generation (Angular tier of the stack)**
**Added seed files to the endpoint generator:**

* model.seed.json to the new endpoint folder under api/model
* addition to config/seed.js to load Model, Seed Data, clear any existing data in the DB, and loads the new seed data


## Example project

Generated with defaults from parent repo (DaftMonk/generator-angular-fullstack): http://fullstack-demo.herokuapp.com/.

Source code: https://github.com/Liam-Williams/generator-node-express-mongo

## Usage

Install `generator-node-express-mongo`:
```
npm install -g generator-node-express-mongo
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run `yo node-express-mongo`, optionally passing an app name:
```
yo node-express-mongo [app-name]
```

Run `grunt` for building, `grunt serve` for preview, and `grunt serve:dist` for a preview of the built app.

## Prerequisites

* MongoDB - Download and Install [MongoDB](http://www.mongodb.org/downloads) - If you plan on scaffolding your project with mongoose, you'll need mongoDB to be installed and have the `mongod` process running.

## Supported Configurations

**Server**

* Database: `None`, `MongoDB`
* Authentication boilerplate: `Yes`, `No`
* oAuth integrations: `Facebook` `Twitter` `Google`
* Socket.io integration: `Yes`, `No`

## Generators

Available generators:

* App
    - [node-express-mongo](#app) (aka [node-express-mongo:app](#app))
* Server Side
    - [node-express-mongo:endpoint](#endpoint)
* Deployment
    - [node-express-mongo:openshift](#openshift)
    - [node-express-mongo:heroku](#heroku)

### App
Sets up a new Npde Express Mongo app, generating all the boilerplate you need to get started.

Example:
```bash
yo node-express-mongo
```

### Endpoint
Generates a new API endpoint.


Example:
```bash
yo node-express-mongo:endpoint message
[?] What will the url of your endpoint be? /api/messages
```

Produces:

    server/api/message/index.js
    server/api/message/message.spec.js
    server/api/message/message.controller.js
    server/api/message/message.model.js  (optional)
    server/api/message/message.seed.json  (optional)
    server/api/message/message.socket.js (optional)


###Openshift

Deploying to OpenShift can be done in just a few steps:

    yo node-express-mongo:openshift

A live application URL will be available in the output.

> **oAuth**
>
> If you're using any oAuth strategies, you must set environment variables for your selected oAuth. For example, if we're using Facebook oAuth we would do this :
>
>     rhc set-env FACEBOOK_ID=id -a my-openshift-app
>     rhc set-env FACEBOOK_SECRET=secret -a my-openshift-app
>
> You will also need to set `DOMAIN` environment variable:
>
>     rhc set-env DOMAIN=<your-openshift-app-name>.rhcloud.com
>
>     # or (if you're using it):
>
>     rhc set-env DOMAIN=<your-custom-domain>
>
> After you've set the required environment variables, restart the server:
>
>     rhc app-restart -a my-openshift-app

To make your deployment process easier consider using [grunt-build-control](https://github.com/robwierzbowski/grunt-build-control).

**Pushing Updates**

    grunt

Commit and push the resulting build, located in your dist folder:

    grunt buildcontrol:openshift

### Heroku

Deploying to heroku only takes a few steps.

    yo node-express-mongo:heroku

To work with your new heroku app using the command line, you will need to run any `heroku` commands from the `dist` folder.


If you're using mongoDB you will need to add a database to your app:

    heroku addons:add mongolab

Your app should now be live. To view it run `heroku open`.

>
> If you're using any oAuth strategies, you must set environment variables for your selected oAuth. For example, if we're using **Facebook** oAuth we would do this :
>
>     heroku config:set FACEBOOK_ID=id
>     heroku config:set FACEBOOK_SECRET=secret
>
> You will also need to set `DOMAIN` environment variable:
>
>     heroku config:set DOMAIN=<your-heroku-app-name>.herokuapp.com
>
>     # or (if you're using it):
>
>     heroku config:set DOMAIN=<your-custom-domain>
>

To make your deployment process easier consider using [grunt-build-control](https://github.com/robwierzbowski/grunt-build-control).

#### Pushing Updates

    grunt

Commit and push the resulting build, located in your dist folder:

    grunt buildcontrol:heroku


All of these can be updated with `bower update` as new versions are released.

## Configuration
Yeoman generated projects can be further tweaked according to your needs by modifying project files appropriately.

A `.yo-rc` file is generated for helping you copy configuration across projects, and to allow you to keep track of your settings. You can change this as you see fit.

## Testing

Running `grunt test` will run the client and server unit tests with karma and mocha.

Use `grunt test:server` to only run server tests.

## Environment Variables

Keeping your app secrets and other sensitive information in source control isn't a good idea. To have grunt launch your app with specific environment variables, add them to the git ignored environment config file: `server/config/local.env.js`.

## Project Structure

Overview

    -── server
        ├── api                 - Our apps server api
        ├── auth                - For handling authentication with different auth strategies
        ├── components          - Our reusable or app-wide components
        ├── config              - Where we do the bulk of our apps configuration
        │   └── local.env.js    - Keep our environment variables out of source control
        │   └── environment     - Configuration specific to the node environment


An example server component in `server/api`

    thing
    ├── index.js                - Routes
    ├── thing.controller.js     - Controller for our `thing` endpoint
    ├── thing.model.js          - Database model
    ├── thing.seed.json         - JSON model seed
    ├── thing.socket.js         - Register socket events
    └── thing.spec.js           - Test

## Contribute

When submitting an issue, please follow the [guidelines](https://github.com/yeoman/yeoman/blob/master/contributing.md#issue-submission). Especially important is to make sure Yeoman is up-to-date, and providing the command or commands that cause the issue.

When submitting a bugfix, try to write a test that exposes the bug and fails before applying your fix. Submit the test alongside the fix.

When submitting a new feature, add tests that cover the feature.

See the `travis.yml` for configuration required to run tests.

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
