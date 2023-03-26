[CoinMarketCap](https://www.coinmarketcap.com) UI Test Framework
===========================

### Framework Overview

This repository uses webdriverIO-v8 (Selenium - Node.js/JavaScript) projects and libraries that demonstrate how to use the tool and develop automation script using the CucumberJS BDD framework. It uses the `chromedriver` NPM package that wraps the ChromeDriver for you. This service does not require a Selenium server, but uses ChromeDriver to communicate with the browser directly.

This boilerplate code support Typescript. It generate Allure, JSON, reporters as well.

If you need more details and references of how to use and how commands work, click: [here](https://webdriver.io/docs/gettingstarted)

## Installation

This project is tested on **Node v18.0.0** and above.  While earlier versions of node may be compatible, but they have not been verified.

`Node.JS:` Install  from the site - https://nodejs.org/en/  take the LTS version based on your Operating system. Please make sure you install NodeJS globally. To take full advantage of the command line you will need to make sure that you have added `node_modules/.bin` to your `$PATH`.  Otherwise you will need to install `npm install -g` globally.

`JDK:` It is optional, install JDK and make sure class path is set properly. JAVA is require to start `Selenium Server` on your local environment nothing else. 1dk1.8 or above reccomended.

💡 To run your test you must have Selenium server up and running to execute any webdriverIO tests, or it will fail fast with an error. To start selenium automatically it has been added as part of `services: ['selenium-standalone']` in the `*.conf.ts`.  That's all there is to it.!.
To make it compatible with appium server, `services: ['appium']` need to  add in the `*.conf.ts`.

After successful installation of above, please run (in terminal) 

-->`npm i`

After successful you will find `node_modules` folder in your project.
### Run Tests

To execute the entire test suite on local development, you can use below

Local Environment `npm run test-local`.

Run tests based on tag use this `npm run test-local @EndToEnd` (You can find tags in feature files)

💡 To run these tests on `SauceLabs` or  `BrowserStack` or `LambdaTest` or in `mobile`, we need to add connection config and related commands need to be added which is a quick set up.

### Config Files

WebdriverIO uses configuration files to setup and execute tests in specific ways.  The configuration is fully customizable, and different functions can be invoked before, during and after each test or test suite.  Config files are found in the `the root directory of this boilerplate project.`and all ends with `*.conf.ts`.  These can be called via the the cli.

### Logs

Complete set of execution `logs` will be generated during the run time and can be found in the parent folder location /logs.

### Reporters

WebdriverIO uses several different types of test reporters to communicate pass/failure.

##### Allure

The Allure Reporter creates [Allure](https://docs.qameta.io/allure/) test reports which is an HTML generated website with all necessary information to debug your test results and take a look on error screenshots. Add allure to the reporters array in config file and define the output directory of the allure reports.  Please note, this has been added in wdio.shared.config.

To generate and view an Allure report inside your corp network or locally, run `npm run allure-report`. The Allure report is hosted on a `web server` and can be accessed through http://YourMachineIP:5050/ and also generated locally which can be found at `./allure-report/index.html`. 


### Using Cucumber JavaScript framework

Tests are written in the Cucumber framework using the Gherkin Syntax. More about Gherkin & Cucumber can be found at https://cucumber.io/

Tests are place in `*.feature` files in the `/test/features/` directory. 

### The Page Object Design Pattern

It is preferable to separate page objects into individual files that end with `.page.ts`. These will require the basic `page.ts` prototype construct / abstract class and create new objects for each individual page.

For more information on the implementation of Page Object Design Pattern, refer to the `/test/pageobjects` directory.

### Contribution Strategy

1. Create a fork of the project into your own repository.
2. Make all your necessary changes
3. create a pull request with a description on what was added or removed and details explaining the changes in lines of code. 
4. If approved, project owners will merge it.

### Licensing

MIT
