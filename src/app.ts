/**
 * jqueryは、$.ajax()が無いslim版を使用する。$.ajaxの代わりにfetch apiを使用する
 * なお、default exportが対応されなさそうなので、import * as..を使用する -> interfaceでaliasできないか確認
 */
import * as $ from 'jquery/dist/jquery.slim';
import Vue from 'vue';
import observe from './sub';

// import 'bootstrap'; // globalへの展開

/* Vue.jsの場合、$(funtion().. に内包する必要は無さそう。DOMのレンダリングは、Vueインスタンスの
 * ライフサイクルフックに組み込まれていて、Vue.js内部で適切に処理されている */

// Vueインスタンスの生成
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
        /**
         * todoを追加する
         * @param {string} title
         */
        add: function (title: string): void {
            this.items.push({
                title: title,
                isChecked: false
            });
            this.newTitle = '';
            this.saveTodo();
        },
        /**
         * todoを削除する
         */
        deleteTodo: function (): void {
            this.items = this.items.filter((x) => x.isChecked === false);
            this.saveTodo();
        },
        /**
         * localstrageからtodoを取得する
         */
        loadTodo: function (): void {
            // itemsが取れなかった場合、空の配列を返す
            let savedData = localStorage.getItem('items');
            if (savedData === null) return;
            // Type GuardsでsavedDataはstringに絞られる
            this.items = JSON.parse(savedData);
        },
        /**
         * localstrageにtodoを保存する
         */
        saveTodo: function (): void {
            localStorage.setItem('items', JSON.stringify(this.items));
        }
    },
    /**
     * Vueインスタンスがマウントされた時に呼ばれる処理（Vue.js API／ライフサイクルフック）
     */
    mounted: function () {
        this.loadTodo();
    }
});

$(function () {
    // 独自モジュールのテスト（オブザーバーの動確）
    observe();
});