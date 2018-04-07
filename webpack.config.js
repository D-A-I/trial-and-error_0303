/**
 * ## 注意 ##
 * メンテナンスにコストがかかるため、構成を煩雑にしないよう（webpackやkarmaは）できる限りシンプルに使う
 * 処理を追加する場合は熟考すること
 */

// node.jsはESM化の途中..CJS方式で読込む
const CleanWebpackPlugin = require('clean-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');

// node.jsの環境変数より、実行環境を判定する
let isProduction = process.env.NODE_ENV === 'production';
// 念のためモードを表示
console.log(`\nproduction：${isProduction}\n`);

// 定義を追加したい場合、オブジェクトリテラルを追加する
let config = [{
    // 環境によってmodeを切替える
    mode: isProduction ? 'production' : 'development',
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
    // 環境によってsourcemapを切り替える
    devtool: isProduction ? false : 'source-map',
    // 環境によって使用するプラグインを切り替える
    plugins: isProduction ? [
        // distフォルダのクリーンアップ（環境によらず共通）
        new CleanWebpackPlugin(['dist']),
        /* vue.js公式の指定
         * productionモードの場合は、vue.jsの内部で、process.env.NODE_ENVを'production'という文字列に置換したいそう
         * ＊ DefinePluginは、C言語の#defineと同様の機能
         * ＊ npm scriptで、webpackをキックする時に環境変数を指定している。npm script経由なら必要ないかも..要確認 */
        new DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ] : [
        new CleanWebpackPlugin(['dist'])
    ]
}];

module.exports = config;