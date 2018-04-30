// モジュールのテスト
import hello from '../src/sub';
/**
 * karmaのframeworksにchaiを指定しているため、chaiはimportしなくてもOK
 * 念のため、IEでも使用可能なexpect方式を採用（今はphantom.jsだけど）
 */
describe('モジュールを読込んでみる。', () => {
    it(`subはHelloを返す。`, () => {
        chai.expect(hello()).to.equal('Hello');
    });
});

// 以下、未完成..
import Subject from '../src/shared/subject';
describe('オブザーバーのテスト', () => {
    // オブザーバーを生成する
    let subject = new Subject();
    // テストメッセージ
    const TEST_MSG = 'Good Morning';
    it(`${TEST_MSG}を渡すと、${TEST_MSG}が返却される`, () => {
        subject.add('peace', () => {
            return TEST_MSG;
        });
        /* テスト実行
         * というか、notify自身の戻り値はvoid */
        // chai.expect(subject.notify()).to.equal(TEST_MSG);
    });
});