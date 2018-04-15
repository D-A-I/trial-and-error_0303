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
