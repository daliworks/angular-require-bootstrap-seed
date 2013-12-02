// Karma configuration
// Generated on Tue Jul 30 2013 10:22:50 GMT+0900 (KST)


// base path, that will be used to resolve files and exclude
basePath = '';


// list of files / patterns to load in the browser
files = [
//  MOCHA,
//  MOCHA_ADAPTER,
  JASMINE,
  JASMINE_ADAPTER,
  REQUIRE,
  REQUIRE_ADAPTER,

  'app/components/jquery/jquery.js',
//  'app/components/angular/angular.js',
//  'app/components/angular-resource/angular-resource.js',
//  'app/components/angular-ui-router/release/angular-ui-router.js',
//  'app/components/angular-mocks/angular-mocks.js',

  {pattern: 'app/scripts/**/*.js', included: false},
  {pattern: 'test/spec/**/*.js', included: false},

  'test/test-main.js'
];


// list of files to exclude
exclude = [
  'app/scripts/main.js'
];


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress'];


// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['ChromeCanary']; //, 'Safari', 'Chrome', 'Firefox'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;
