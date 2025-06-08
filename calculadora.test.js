const { add, subtract } = require('./calculadora');

describe('Calculator Tests', () => {

  test('A função add deve retornar a soma correta de dois números', () => {
    
    expect(add(2, 3)).toBe(5);
  });

  test('A função add deve funcionar com números negativos', () => {
    expect(add(-1, -5)).toBe(-6);
  });

  test('A função add deve funcionar com zero', () => {
    expect(add(5, 0)).toBe(5);
  });

  test('A função subtract deve retornar a subtração correta', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test('A função subtract deve funcionar com números negativos', () => {
    expect(subtract(1, -5)).toBe(6);
  });
});
