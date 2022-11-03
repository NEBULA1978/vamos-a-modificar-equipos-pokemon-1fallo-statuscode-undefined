const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../app').app;

describe('Suite de prueba e2e para el curso', () => {
  it('should return hello world', (done) => {
    // Llamamos a la funcion
    chai.request(app)
      .get('/')
      .end((err, res) => {
        // Comprobamos el resultado hello world!
        // console.log('A')
        chai.assert.equal(res.text, 'Hello World!');
        done();

      });
    // console.log('B')
  });

});

