import { hello } from '../src/sub';
/**
 * karmaのframeworksにchaiを指定しているから、chaiはimportしなくてもOK
 */
describe('モジュールを読込んでみる。', () => {
    it(`subはHelloを返す。`, () => {
        chai.assert.equal('Pello', hello()); // assert形式は止めたい..
    });
});
