var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');


var TestGenerator = yeoman.generators.Base.extend({

    welcome: function() {
        this.log(yosay(
            'Welcome to my Test Generator'
        ));
    },

    promptApp: function() {
        var done = this.async();

        var prompts = [{
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
        }];

        this.prompt(prompts, function(answers) {
            this.appName = answers.appName;
            this.appType = answers.appType;
            this.appUI = answers.appUI;
            this.appAuth = answers.appAuth;
            this.appFirebase = answers.appFirebase;
            done();
        }.bind(this));
    },

    buildingApp: function() {
        this.log(yosay(
            'Building ' + this.appName
        ));
    },

    copyStaticFiles: function() {
        //
        // logic to move files that don't change'
        //
    },

    copyTemplates: function() {
        //
        // logic to move files that are dynamic in nature
        //
    },

    runNPM: function() {
        this.npmInstall();
    }

});

module.exports = TestGenerator;
