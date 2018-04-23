/**
 * jqueryは、$.ajax()が無いslim版を使用する。$.ajaxの代わりにfetch apiを使用する
 * なお、default exportが対応されなさそうなので、import * as..を使用する
 */
import * as $ from 'jquery/dist/jquery.slim';
import Subject from './shared/subject';
import Vue from 'vue';

// 独自のモジュール
// import hello from './sub';

$(function () {

    // オブザーバーを生成する
    let subject = new Subject();

    // テストメッセージをセット
    const TEST_MSG = 'kitty on the lap';
    subject.add('peace', () => console.log(TEST_MSG));
    subject.add('peace', () => console.log(TEST_MSG));
    subject.add('peace', () => console.log(TEST_MSG));

    // 通知
    subject.notify('peace');

    new Vue({
        el: '#app',
        data: {
            message: TEST_MSG
        }
    })
});
