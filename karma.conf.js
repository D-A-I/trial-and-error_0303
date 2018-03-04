// Karma configuration
// Generated on Sun Mar 04 2018 02:42:13 GMT+0900 (JST)

/**
 * 構成が煩雑になるのを避けるため、karmaやwebpackは、可能な限りシンプルに使う
 * これ以上処理を追加したい場合は、熟考すること
 * -----
 * 現状は、karma init後のデフォルトの状態から、karma-typescriptの、以下設定を追加した状態
 * https://github.com/monounity/karma-typescript/blob/master/cookbook.md
 */

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', "karma-typescript"],


    // list of files / patterns to load in the browser
    files: [
      { pattern: "src/**/*.ts" },
      { pattern: "test/**/*.ts" }
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // '**/*.js': ['sourcemap']
      "src/**/*.ts": ["karma-typescript", "coverage"],
      "test/**/*.ts": ["karma-typescript"] // テストコードはカバレッジに含めない
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', "coverage", "karma-typescript"],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
