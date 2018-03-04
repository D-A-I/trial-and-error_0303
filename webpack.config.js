
/**
 * 構成が煩雑になるのを避けるため、karmaやwebpackは、可能な限りシンプルに使う
 * これ以上処理を追加したい場合は、熟考すること
 */

module.exports = {
    mode: 'development', //sourcemapを有効にする
    entry: './src/app',
    output: {
        path: `${__dirname}/dist`,
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, use: 'ts-loader' }
        ]
    }
}
