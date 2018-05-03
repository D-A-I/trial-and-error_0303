/**
 * jqueryは、$.ajax()が無いslim版を使用する。$.ajaxの代わりにfetch apiを使用する
 * なお、default exportが対応されなさそうなので、import * as..を使用する
 */
import * as $ from 'jquery/dist/jquery.slim';
import Vue from 'vue';
import observe from './sub';

// import 'bootstrap'; // globalへの展開

$(function () {

    // 独自モジュールのテスト（オブザーバーの動確）
    observe();

    new Vue({
        el: '#app',
        data: {
            message: 'kitty on the lap',
            items: [
                { title: 'MS Azureを試す', isChecked: true },
                { title: 'jquery.slimを試す', isChecked: false },
                { title: 'typescriptで簡単なobserverパターンのコードを書く（break through JSの本より）', isChecked: false },
                { title: 'fetch apiを試す（tsconfig.jsonのlib[“dom”]）', isChecked: false },
                { title: 'promiseを試す（tsconfig.jsonのlib[“es2015.promise”]）', isChecked: false },
                { title: 'async/awaitを試す（tsconfig.jsonのlib[“es2015.promise”]）', isChecked: false }
            ],
            newTitle: ''
        },
        methods: {
            add: function (_newTitle: string) {
                // itemを追加する
                this.items.push({
                    title: _newTitle,
                    isChecked: false
                });
                this.newTitle = '';
            }
        }
    })
});
