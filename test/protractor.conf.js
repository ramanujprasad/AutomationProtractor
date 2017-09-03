var config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    './e2e/**/*.spec.js'
  ],
  allScriptsTimeout: 20000,
  framework: 'jasmine2',

  browserName: 'chrome',
  directConnect: true,

  baseUrl: 'http://localhost:3000',
  // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 100000,
    isVerbose: true
   },
   capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
        // Prevent warning about dev tools, which breaks some tests, in Windows at least.
        'args': ['--disable-extensions']
    }
},
};

exports.config = config;
