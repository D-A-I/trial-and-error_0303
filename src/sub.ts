import Subject from './shared/subject';
/**
 * 簡易的なオブザーバーパターンのテスト
 * @description import sub from './sub';.. で呼び出すため、defaultキーワードを付けておく
 * @export
 */
export default function observe() {
    // オブザーバーを生成する
    let subject = new Subject();

    // テストメッセージをセット
    const TEST_MSG = 'kitty on the lap';
    subject.add('start', () => console.log('-----'))
    subject.add('peace', () => console.log(TEST_MSG));
    subject.add('peace', () => console.log(TEST_MSG));
    subject.add('peace', () => console.log(TEST_MSG));

    // 通知
    subject.notify('start');
    subject.notify('peace');
}
