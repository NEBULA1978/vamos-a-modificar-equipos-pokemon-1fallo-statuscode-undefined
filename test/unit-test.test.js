const assert = require('chai').assert;

function addValue(a, b) {
  return a + b;
}

describe('Suite de prueba para el curso', () => {
  it('should return 4', () => {
    // Llamamos a la funcion
    let va = addValue(2, 2);
    // Obtenemos el resultado esperado
    assert.equal(va, 4);
  });
});