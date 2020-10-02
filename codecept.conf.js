exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://myrgo-preprod.ctt.co.uk',
      browser: 'chrome',
      restart: false,
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'IshuCodeceptJSFramework',
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  }
}