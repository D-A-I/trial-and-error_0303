/**
 * tsconfig.jsonでallowSyntheticDefaultImports:trueにしないと、
 * jqueryの読込みの際、default exportが無いエラーになる
 */
import $ from 'jquery';
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
