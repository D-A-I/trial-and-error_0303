/**
 * ## 注意 ##
 * メンテナンスにコストがかかるため、構成を煩雑にしないよう（webpackやkarmaは）できる限りシンプルに使う
 * 処理を追加する場合は熟考すること
 */

// node.jsはESM化の途中..CJS方式で読込む
const CleanWebpackPlugin = require('clean-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');

// 環境変数 process.env.NODE_ENV が未設定の場合、developmentモードにしておく
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
console.log(`  process.env.NODE_ENV -> ${process.env.NODE_ENV}\n`);

// 定義を追加したい場合、オブジェクトリテラルを追加する
let config = [{
    // 環境によってmodeを切替える
    mode: process.env.NODE_ENV,
    entry: {
        app: './src/app'
    },
    output: {
        path: `${__dirname}/dist`,
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'], // 拡張子の解決
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        // 拡張子がtsのファイルを、ts-loaderでトランスパイルする
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader'
        }]
    },
    optimization:{
        // 複数のバンドルファイル間で共通しているモジュールを"common_lib.bundle.js"に切り出す
        splitChunks: {
            name: 'common_lib',
            chunks: 'initial'
        }
    },
    // 環境によってsourcemapを切り替える
    devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,
    // 環境によって使用するプラグインを切り替える
    plugins: [
        new CleanWebpackPlugin(['dist']),
        /* vue.js公式の指定
         * todo：productionとdevelopmentで、バンドルファイルを比較したい｡｡ */
        new DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
}];

module.exports = config;