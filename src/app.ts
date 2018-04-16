/**
 * jqueryは、$.ajax()が無いslim版を使用する。$.ajaxの代わりにfetch apiを使用する
 * なお、default exportが対応されなさそうなんで、import * as..を使用する
 */
import * as $ from 'jquery/dist/jquery.slim';
import Vue from 'vue';

// 独自のモジュール
// import hello from './sub';

$(function () {
    new Vue({
        el: '#app',
        data: {
            message: 'kitty on the lap'
        }
    })
});
