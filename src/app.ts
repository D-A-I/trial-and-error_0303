/**
 * import $ from 'jquery'にする場合、tsconfig.jsonで"allowSyntheticDefaultImports"をtrueにしないと、
 * default exportが無い旨のエラーになる。default exportは対応されなさそうなんで、import * as..を使用する
 */
import * as $ from 'jquery';
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
