'use strict';
var path = require('path');
var yeoman = require('yeoman-generator');
var util = require('util');
var ngUtil = require('../util');
var ScriptBase = require('../script-base.js');

var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.askFor = function askFor() {
  var done = this.async();
  var name = this.name;

  var base = this.config.get('routesBase') || '/api/';
  if(base.charAt(base.length-1) !== '/') {
    base = base + '/';
  }

  // pluralization defaults to true for backwards compat
  if (this.config.get('pluralizeRoutes') !== false) {
    name = name + 's';
  }

  var prompts = [
    {
      name: 'route',
      message: 'What will the url of your endpoint be?',
      default: base + name
    }
  ];

  this.prompt(prompts, function (props) {
    if(props.route.charAt(0) !== '/') {
      props.route = '/' + props.route;
    }

    this.route = props.route;
    done();
  }.bind(this));
};

Generator.prototype.registerEndpoint = function registerEndpoint() {
  if(this.config.get('insertRoutes')) {
    var routeConfig = {
      file: this.config.get('registerRoutesFile'),
      needle: this.config.get('routesNeedle'),
      splicable: [
        "app.use(\'" + this.route +"\', require(\'./api/" + this.name + "\'));"
      ]
    };
    ngUtil.rewriteFile(routeConfig);
  }

  if(this.config.get('insertSeed')) {
    var seedModelConfig = {
      file: this.config.get('registerSeedFile'),
      needle: this.config.get('seedModelNeedle'),
      splicable: [
        "var " + ngUtil.capitalizeFirstLetter(this.name) + " = require(\'../api/" + this.name + "/" + this.name + ".model\');"
      ]
    };
    ngUtil.rewriteFile(seedModelConfig);

    var seedDataConfig = {
      file: this.config.get('registerSeedFile'),
      needle: this.config.get('seedDataNeedle'),
      splicable: [
        "var " + this.name + "Seed = require(\'../api/" + this.name + "/" + this.name + ".seed.json\');"
      ]
    };
    ngUtil.rewriteFile(seedDataConfig);

    var seedInsertConfig = {
      file: this.config.get('registerSeedFile'),
      needle: this.config.get('seedInsertNeedle'),
      splicable: [
        ngUtil.capitalizeFirstLetter(this.name) + ".find({}).remove(function() {\n\t" + ngUtil.capitalizeFirstLetter(this.name) + ".create(" + this.name + "Seed);\n});\n"
      ]
    };
    ngUtil.rewriteFile(seedInsertConfig);
  }

  if (this.filters && this.filters.socketio) {
    if(this.config.get('insertSockets')) {
      var socketConfig = {
        file: this.config.get('registerSocketsFile'),
        needle: this.config.get('socketsNeedle'),
        splicable: [
          "require(\'../api/" + this.name + '/' + this.name + ".socket\').register(socket);"
        ]
      };
      ngUtil.rewriteFile(socketConfig);
    }
  }
};

Generator.prototype.createFiles = function createFiles() {
  var dest = this.config.get('endpointDirectory') || 'server/api/' + this.name;
  this.sourceRoot(path.join(__dirname, './templates'));
  ngUtil.processDirectory(this, '.', dest);
};
