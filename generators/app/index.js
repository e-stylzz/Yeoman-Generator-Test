var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');


var TestGenerator = yeoman.Base.extend({

    constructor: function() {
        yeoman.Base.apply(this, arguments);
    },

    welcome: function() {
        this.log(yosay(
            'Welcome to my Test Generator'
        ));
    },

    promptApp: function() {
        var done = this.async();

        var prompts = [
            {
                type: 'input',
                name: 'appName',
                message: 'What would you like to name this app?'
            },
            {
                type: 'list',
                name: 'appType',
                message: 'What type of application do you want to create?',
                choices: [{
                    name: 'Plain Angular Front End App',
                    value: 'plainAngular'
                }]
            },
            {
                type: 'list',
                name: 'appUI',
                message: 'Which UI framework would you like to use?',
                default: 'bootstrap',
                choices: [
                    {
                        name: 'BootStrap',
                        value: 'bootstrap'
                    },
                    {
                        name: 'Office UI Fabric',
                        value: 'officefabric'
                    },
                    {
                        name: 'Angular Material Design',
                        value: 'materialdesign'
                    },
                    {
                        name: 'None',
                        value: 'none'
                    }
                ]
            },
            {
                type: 'list',
                name: 'appAuth',
                message: 'Which type of auth would you like to use?',
                default: 'none',
                choices: [
                    {
                        name: 'None',
                        value: 'none'
                    },
                    {
                        name: 'Auth0',
                        value: 'auth0'
                    },
                    {
                        name: 'Firebase',
                        value: 'firebase'
                    },
                    {
                        name: 'Office 365',
                        value: 'office365'
                    }
                ]
            },
            {
                type: 'list',
                name: 'appFirebase',
                message: 'Do you want to use Firebase?',
                default: 'yes',
                choices: [
                    {
                        name: 'Yes',
                        value: 'yes'
                    },
                    {
                        name: 'No',
                        value: 'no'
                    }
                ]
            }
        ];

        this.prompt(prompts, function(answers) {
            this.appName = answers.appName;
            this.appType = answers.appType;
            this.appUI = answers.appUI;
            this.appAuth = answers.appAuth;
            this.appFirebase = answers.appFirebase;
            done();
        }.bind(this));
    },

    displayName: function() {
        this.log('Building ' + this.appName);
    },

    packageFiles: function() {
        var context = {
            appName: this.appName,
            appType: this.appType,
            appUI: this.appUI,
            appAuth: this.appAuth,
            appFirebase: this.appFirebase
        }

        this.log('Context: ', context);

        this.copy('_package.json', 'package.json');
        this.template('_bower.json', 'bower.json');
        this.template('_gulpfile.js', 'gulpfile.js');
        this.template('_gulp.config.js', 'gulp.config.js');
        //this.template('_karma.conf.js', 'karma.conf.js');
        //this.template('_README.md', 'README.md');
    },

    appFiles: function() {
        
        this.directory('src/client/app');
        this.directory('src/client/images');
        this.directory('src/client/styles');
        this.directory('src/client/test-helpers');

        this.template('src/client/_index.html', 'src/client/index.html');

        // this.template('src/server/_app.js', 'src/server/app.js');
        // this.template('src/server/_data.js', 'src/server/data.js');
        // this.template('src/server/_routes.js', 'src/server/routes.js');
        // this.directory('src/server/utils');
        // this.copy('src/server/favicon.ico');
    },

    projectfiles: function() {
        //this.copy('editorconfig', '.editorconfig');
        //this.copy('jshintrc', '.jshintrc');
        //this.copy('jscsrc', '.jscsrc');
        this.copy('bowerrc', '.bowerrc');
        this.copy('gitignore', '.gitignore');
    },

    runNPM: function() {
        this.npmInstall();
    },

    end: function() {

    }

});

module.exports = TestGenerator;
