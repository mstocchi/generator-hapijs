'use strict';
const util = require('util');
const path = require('path');
const yeoman = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');


const HapiGenerator = yeoman.generators.Base.extend({
    init: function() {
        this.pkg = require('../../package.json');

        this.on('end', function() {
            if (!this.options['skip-install']) {
                this.installDependencies();
            }
        });
    },

    askFor: function() {
    //var done = this.async();

		// Have Yeoman greet the user.
        this.log(yosay('Welcome to the marvelous Hapijs generator!'));

    // var prompts = [{
//       type: 'confirm',
//       name: 'someOption',
//       message: 'Would you like to enable this option?',
//       default: true
//     }];
//
//     this.prompt(prompts, function (props) {
//       this.someOption = props.someOption;
//
//       done();
//     }.bind(this));
    },

    files: function() {
        this.copy('bower.json', 'bower.json');
        this.copy('package.json', 'package.json');
        this.copy('server.js', path.resolve('server.js'));
        this.copy('database.js', path.resolve('database.js'));
        this.copy('.eslintrc.json', path.resolve('.eslintrc.json'));
        this.mkdir('modules');
        this.copy('index.js', path.resolve('modules/index.js'));
    }

  // projectfiles: function () {
//     //this.copy('editorconfig', '.editorconfig');
//     //this.copy('jshintrc', '.jshintrc');
//   }
});

module.exports = HapiGenerator;
