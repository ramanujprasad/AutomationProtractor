var config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    './e2e/**/*.spec.js'
  ],
  allScriptsTimeout: 20000,

  browserName: 'chrome',
  directConnect: true,

  baseUrl: 'http://localhost:3333',
  // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 100000,
    isVerbose: true
   }
};

exports.config = config;
