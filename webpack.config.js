/**
 * ## 注意 ##
 * メンテナンスにコストがかかるため、構成を煩雑にしないよう（webpackやkarmaは）できる限りシンプルに使う
 * 処理を追加する場合は熟考すること
 */

// node.jsはESM化の途中..CJS方式で読込む
const CleanWebpackPlugin = require('clean-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');

// 環境変数によらない共通の設定
// 別の定義を追加したい場合、オブジェクトリテラルを追加する
let config = [{
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
        new CleanWebpackPlugin(['dist']),
    ]
}];

// 環境変数によって切り分ける
if (process.env.NODE_ENV === 'production') {
    // コードを最適化する
    config.forEach((val, idx, arr) => {
        val.mode = 'production'; // modeが必要か要確認
        val.plugins.push(
            // vue.js公式のproduction配信設定
            new DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"'
                }
            })
        )
    });
} else {
    // source-mapを有効にする。なお、inline-source-map等を使用しても良い
    config.forEach((val, idx, arr) => {
        val.mode = 'development';
        val.devtool = 'source-map';
    });
}

module.exports = config;