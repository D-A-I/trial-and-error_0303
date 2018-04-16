/**
 * オブザーバーパターンを実装する
 * @class Subject
 */
export default class Subject {
    // 監視者
    private _observers: Function[] = [];
    /**
     * observerを受け取る
     * @memberof Subject
     * @param {Function} fnc
     */
    add = (fnc: Function) => this._observers.push(fnc);
    /**
     * observerを削除する
     * @memberof Subject
     * @param {Function} fnc
     */
    remove = (fnc: Function) => {
        this._observers.forEach((obs, idx) => {
            // 合致する通知を削除する
            if (obs === fnc) this._observers.splice(idx, 1);
        });
    };
    /**
     * observerを実行する
     * @memberof Subject
     */
    notify = () => {
        this._observers.forEach((obs, idx) => {
            obs();
        });
    };
}
/**
 * observer用のインターフェース
 * @interface Observer
 */
interface Observer {
    [name: string]: Function;
}