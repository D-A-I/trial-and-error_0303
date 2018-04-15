/**
 * ## 注意 ##
 * メンテナンスにコストがかかるため、構成を煩雑にしないよう（webpackやkarmaは）できる限りシンプルに使う
 * 処理を追加する場合は熟考すること
 */

// node.jsはESM化の途中..CJS方式で読込む
const CleanWebpackPlugin = require('clean-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');

// 環境変数 process.env.NODE_ENV が未定義の場合、developmentモードにしておく
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
console.log(`  process.env.NODE_ENV -> ${process.env.NODE_ENV}\n`);

// 定義を追加したい場合、オブジェクトリテラルを追加する
let config = [{
    // 環境によってmodeを切替える
    mode: process.env.NODE_ENV,
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
    devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,
    // 環境によって使用するプラグインを切り替える
    plugins: [
        new CleanWebpackPlugin(['dist']),
        /* vue.js公式の指定
         * productionモードの場合は、vue.jsの内部で、process.env.NODE_ENVを'production'という文字列に置換したいそう(Node.js環境下だけでなく)
         * ＊ DefinePluginは、C言語の#defineと同様の機能 */
        new DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
}];

module.exports = config;