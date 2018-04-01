/**
 * import $ from 'jquery'にする場合、tsconfig.jsonで"allowSyntheticDefaultImports"をtrueにしないと、
 * default exportが無い旨のエラーになる。今回は、defaultが無い想定でimportする
 */
import * as $ from 'jquery';
import Vue from 'vue';

// まだ何もしていない独自のモジュール
// import { hello } from './sub';
//alert(hello());

$(function () {
    new Vue({
        el: '#app',
        data: {
            message: 'kitty on the lap'
        }
    })
});
