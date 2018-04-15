/**
 * jqueryは、$.ajax()が無いslim版を使用する。$.ajaxは、代わりにfetch apiを使用する
 * jqueryは、default exportが対応されなさそうなんで、import * as..を使用する
 */
import * as $ from 'jquery/dist/jquery.slim';
import Subject from './shared/observer';
import Vue from 'vue';

// 独自のモジュール
// import hello from './sub';

$(function () {

    // オブザーバーを生成する
    let subject = new Subject();
    
    // テストメッセージをセット
    const TEST_MSG = 'kitty on the lap';
    subject.add(() => console.log(TEST_MSG));
    subject.add(() => console.log(TEST_MSG));
    subject.add(() => console.log(TEST_MSG));
    
    // 通知
    subject.notify();

    new Vue({
        el: '#app',
        data: {
            message: TEST_MSG
        }
    })
});
