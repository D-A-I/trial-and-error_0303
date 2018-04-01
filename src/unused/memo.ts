
/* jquery離れを進めようとした時のメモ */

import * as $ from 'jquery';
import Vue from 'vue';

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