import hello from '../src/sub';
/**
 * karmaのframeworksにchaiを指定しているため、chaiはimportしなくてもOK
 */
describe('モジュールを読込んでみる。', () => {
    it(`subはHelloを返す。`, () => {
        chai.assert.equal('Hello', hello()); // assert形式は止めたい..
    });
});
