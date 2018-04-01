/**
 * ## 注意 ##
 * メンテナンスにコストがかかるため、構成を煩雑にしないよう（webpackやkarmaは）できる限りシンプルに使う
 * 処理を追加する場合は熟考すること
 */

// node.jsはESM化の途中..CJS方式で読込む
const CleanWebpackPlugin = require('clean-webpack-plugin');

// 環境変数によらない共通の設定
let config = {
    entry: './src/app',
    output: {
        path: `${__dirname}/dist`,
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader'
        }]
    },
    // distフォルダをクリーンアップする
    plugins: [
        new CleanWebpackPlugin(['dist'])
    ]
};

// 環境変数によって切り分ける
if (process.env.NODE_ENV === 'production') {
    // コードを最適化する
    config.mode = 'production';
} else {
    // source-mapを有効にする。inline-source-map等を使用しても良い
    config.mode = 'development';
    config.devtool = 'source-map';
}

module.exports = config;