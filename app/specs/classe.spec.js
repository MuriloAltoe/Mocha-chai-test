
const chai = require('chai');

const Calc = require('../app/calc');

const calc = new Calc()

describe('Teste da classe', () => {
    it('Testar a soma', () => {
        chai.expect(calc.soma(5, 2)).to.equal(7);
    });

    it('Testar a subtração', () => {
        chai.expect(calc.subtração(5, 2)).to.equal(3);
    });

    it('Testar a multiplicação', () => {
        chai.expect(calc.multiplicacao(5,2)).to.equal(10);
    });

    it('Testar a divisão', () => {
        chai.expect(calc.divisao(5, 2)).to.equal(2.5);
    });
});

