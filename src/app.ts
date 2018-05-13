/**
 * jqueryは、$.ajax()が無いslim版を使用し、$.ajaxの代わりにfetch apiを使用する
 * なお、default exportが対応されなさそうなので、import * as..を使用する -> interfaceでaliasできないか確認
 */
import * as $ from 'jquery/dist/jquery.slim';
import Vue from 'vue';
import observe from './sub';

// import 'bootstrap'; // globalへの展開

/* Vue.jsの場合、$(funtion().. に内包する必要は無い。Vueインスタンスのライフサイクル内で、
 * DOMのレンダリングにフックしている。もし、別途 $(funtion().. 内の処理が必要となる場合は、以下のmountedを参照 */

// Vueインスタンスの生成
new Vue({
    /* ※ Vue.jsのコンストラクタ関数直下のプロパティやメソッドの定義では、アロー関数式を使用しない
     * 　 詳細は右記 https://jp.vuejs.org/v2/api/index.html */
    el: '#app',
    data: {
        message: 'kitty on the lap',
        items: new Array<Todo>(),
        newTitle: ''
    },
    /**
     * Vueインスタンスがマウントされた時に呼ばれる（Vue.js API ライフサイクルフック）
     */
    mounted: function () {
        // localstrageからデータ取得
        this.loadTodo();
        // jsonファイルから初期データ取得（localstrageに無い場合）
        if (this.items.length === 0) this.getInitialData();
        /* ビュー全体がレンダリングされた後の処理は以下に書く（既存の $(funtion().. 内のデータ取得以外の処理はここ） */
        this.$nextTick(function () {
            observe();
        });
    },
    methods: {
        /**
         * todoを追加する
         * @param {string} title
         */
        add: function (title: string): void {
            this.items.push({ title: title, isChecked: false });
            this.newTitle = '';
            this.saveTodo();
        },
        /**
         * todoを削除する
         */
        deleteTodo: function (): void {
            /* メソッド内ならアロー関数式を使用しても良いが、混乱を避けるため、thisは使わない */
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
            // Type Guardsで、savedDataはstringに絞られる
            this.items = JSON.parse(savedData);
        },
        /**
         * jsonファイルから初期データを取得する
         */
        getInitialData: function (): void {
            fetch('../init-data.json')
                .then(res => {
                    return res.json();
                })
                .then(json => {
                    this.items = json.todo;
                })
                .catch(err => console.log(err)); // エラー発生時はログに記録する
        },
        /**
         * localstrageにtodoを保存する
         */
        saveTodo: function (): void {
            localStorage.setItem('items', JSON.stringify(this.items));
        }
    },
});

/**
 * Todo用インターフェース
 * @interface Todo
 */
interface Todo {
    title: string,
    isChecked: boolean
}