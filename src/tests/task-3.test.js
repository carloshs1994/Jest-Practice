const Calculator = require('../task-3');
const calculator1 = new Calculator(20, 10);
const calculator2 = new Calculator(1, 10);
const calculator3 = new Calculator(10, 0);

describe('Given a class Calculator', () => {
  test('Should return the operations add', () => {
    expect(calculator1.add()).toBe(30);
    expect(calculator2.add()).toBe(11);
    expect(calculator3.add()).toBe(10);
  });

  test('Should return the operations substract', () => {
    expect(calculator1.subtract()).toBe(10);
    expect(calculator2.subtract()).toBe(-9);
    expect(calculator3.subtract()).toBe(10);
  });

  test('Should return the operations divide', () => {
    expect(calculator1.divide()).toBe(2);
    expect(calculator2.divide()).toBe(0.1);
    expect(calculator3.divide()).toBe('Math Error');
  });

  test('Should return the operations multiply', () => {
    expect(calculator1.multiply()).toBe(200);
    expect(calculator2.multiply()).toBe(10);
    expect(calculator3.multiply()).toBe(0);
  });
});
