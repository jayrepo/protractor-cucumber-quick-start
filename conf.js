exports.config = {
  seleniumAddress: process.env.SELENIUM_REMOTE_URL || 'http://hub-cloud.browserstack.com/wd/hub', // http://localhost:4444/wd/hub',
  baseUrl: process.env.ENV_URL || 'http://juliemr.github.io',
  SELENIUM_PROMISE_MANAGER: false,
  directConnect: true, // false for remote like browserstack
  restartBrowserBetweenTests: false,
  // common capabilities for browser stack
  commonCapabilities: {
    'browserstack.user': process.env.BS_USER,
    'browserstack.key': process.env.BS_KEY,
    os: 'Windows',
    os_version: '10',
    project: 'Demo',
    build: new Date().toJSON().substr(0, 16).replace(/[-:]/g, '') +
      (process.env.USERNAME ? process.env.USERNAME.slice(0, -3) : 'jenkins')
  },
  multiCapabilities: [{
    browserName: 'chrome',
    chromeOptions: {
      args: ['disable-infobars', 'start-maximized']
    }
  }, {
    browserName: 'firefox'
  }],
  // capabilities: {
  //   browserName: 'firefox'
  // },
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: [
    './features/*.feature'
  ],
  // cucumber command line options
  cucumberOpts: {
    format: 'json:reports/results.json',
    tags: process.env.TAG || ''
  },
  plugins: [{
    package: 'protractor-multiple-cucumber-html-reporter-plugin',
    options: {
      automaticallyGenerateReport: true,
      removeExistingJsonReportFile: true,
      removeOriginalJsonReportFile: true,
      displayDuration: true
    }
  }],
  onPrepare: async function () {
    await browser.manage().window().maximize()
  }
}

exports.config.multiCapabilities.map(caps =>
  Object.assign(caps, exports.config.commonCapabilities))
