const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const app = require("../app").app;

describe("Suite de pruebas auth", () => {
  // Cuando la llamada no tiene correctamente la llave
  it("should return 401 when no jwt token available", (done) => {
    // Cuando la llamada no tiene correctamente la llave
    // Llamamos a la funcion para llamar a este endpoint
    chai.request(app)
      .get("/team")
      .end((err, res) => {
        chai.assert.equal(res.statusCode, 401);
        done();
      });

    // Obtenemos el resultado esperado
  });
  // Cuando la llamada no tiene correctamente la llave
  it("should return 200 when jwt is valid", (done) => {
    // Cuando la llamada  tiene correctamente la llave
    // Llamamos a la funcion para llamar a este endpoint
    chai.request(app)
      // REspuesta del login que esperamos
      .post("/login")
      .end((err, res) => {
        // CUando recibimos respuesta realizamos el get
        chai.request(app)
          .get("/team")
          .set("Authorization", `JWT ${res.body.token}`)
          .end((err, res) => {
            chai.assert.equal(res.statusCode, 200);
            done();
          });
      });

    // Obtenemos el resultado esperado
    // Cuando la llamada  tiene correctamente la llave
    // Llamamos a la funcion para llamar a este endpoint

    // Obtenemos el resultado esperado
  });
});

// Prohibido elususario no tiene autorizacion
// Si tenemos una autorizacion pero el ususario no tiene permisos para realizar esa accion debe devolver 403
// it('should return 403', (done) => {
// Llamamos a la funcion

// Obtenemos el resultado esperado

// });
