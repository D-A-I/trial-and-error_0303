// Karma configuration
// Generated on Sun Mar 04 2018 02:42:13 GMT+0900 (JST)

/**
 * ## 注意 ##
 * メンテナンスにコストがかかるため、構成を煩雑にしないよう（webpackやkarmaは）できる限りシンプルに使う
 * 処理を追加する場合は熟考すること.. なお、今後vue.js公式の推奨設定に変更するかも
 * -----
 * 1.karma init後のデフォルト状態から、karma-typescriptの、以下設定を追加
 *   https://github.com/monounity/karma-typescript/blob/master/cookbook.md
 * 2.karma-typescriptが、tsconfig.jsonを読み込むように設定
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
    concurrency: Infinity,
    
    /* tsconfig.jsonを読み込むように指定する */
    karmaTypescriptConfig: {
      tsconfig: "./tsconfig.json"
    }
  })
}
