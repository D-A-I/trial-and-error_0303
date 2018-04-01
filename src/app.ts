/**
 * tsconfig.jsonで"allowSyntheticDefaultImports"をtrueにしないと、
 * jqueryの読込みの際、default exportが無い旨のエラーになる
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
