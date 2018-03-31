/**
 * tsconfig.jsonで"allowSyntheticDefaultImports"をtrueにしないと、
 * jqueryの読込みの際、default exportが無い旨のエラーになる
 */
import $ from 'jquery';
import Vue from 'vue';

// まだ何もしていない独自のモジュール
// import { hello } from './sub';
//alert(hello());

/*
//　jqueryのreadyに渡されるコールバックと同等
let initialize = (): void => {
    new Vue({
        el: '#app',
        data: {
            message: 'kitty on the lap'
        }
    })
};

// jqueryの $(function () { } と同一のタイミングで実行される
if (document.readyState !== 'loading') {
    initialize();
} else {
    document.addEventListener('DOMContentLoaded', initialize);
}
*/

$(function () {
    new Vue({
        el: '#app',
        data: {
            message: 'kitty on the lap'
        }
    })
});
