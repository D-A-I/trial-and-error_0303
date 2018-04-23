/**
 * オブザーバーパターンを実装する
 * @class Subject
 */
export default class Subject {
    // 監視者
    private _observers: Observer = {};
    /**
     * observerを追加する
     * @memberof Subject
     * @param {string} name
     * @param {Function} fnc
     */
    add = (name: string, fnc: Function) => {
        // イベント毎の配列にする
        if (!this._observers[name]) this._observers[name] = [];
        this._observers[name].push(fnc);
    }
    /**
     * observerを削除する
     * @memberof Subject
     * @param {string} name
     * @param {Function} fnc
     */
    remove = (name: string, fnc: Function) => {
        // イベント名が無効な場合、何もしない
        if (!this._observers[name] || !Array.isArray(this._observers[name])) return;
        // 合致する通知を削除する
        this._observers[name].forEach((obs, idx) => {
            if (obs === fnc) this._observers[name].splice(idx, 1);
        });
    };
    /**
     * observerを実行する
     * @memberof Subject
     * @param {string} name
     */
    notify = (name: string) => {
        // イベント名が無効な場合、何もしない
        if (!this._observers[name] || !Array.isArray(this._observers[name])) return;
        // イベント名に合致する全通知を呼び出す
        this._observers[name].forEach((obs, idx) => {
            obs();
        });
    };
}
/**
 * observer用のインターフェース
 * @interface Observer
 */
interface Observer {
    [name: string]: Function[];
}