// Arquivo conf.js

let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
//const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var HtmlReporter = require('protractor-beautiful-reporter');

module.exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['specs/*.spec.js'],  

    baseUrl: 'http://localhost:4200/',

    params: {
        adminLogin: {
            'user': 'PIRAMIDE360',
            'password': 'piramide',
            'userI': 'loginIncorreto',
            'passwordI': 'senhaIncorreta'
        }
    },    
    
    capabilities: {
        'browserName': 'chrome',  
        "chromeOptions": {
            "args": [
                "--disable-infobars"
            ]
        }      
    },    

    onPrepare: function() {
        browser.driver.manage().window().maximize();   
        jasmine.getEnv().addReporter(new SpecReporter({
          displayFailuresSummary: true,
          displayFailuredSpec: true,
          displaySuiteNumber: true,
          displaySpecDuration: true
        }));

        /*jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            fixedScreenShotName: true,  
            takeScreenshots: true,
            savePath: 'screenshots'
        }));*/
              // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'tmp/screenshots'
        }).getJasmine2Reporter());
   
    }
};
