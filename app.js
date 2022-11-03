const express = require('express');
const passport = require('passport');
// var LocalStrategy = require('passport-local');
require('./auth')(passport);

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  //req: es la request, la peticion
  // res: es la respuesata
  // console.log(req);
  res.status(200).send('Hello World!')
});

app.post('/login', (req, res) => {
  res.status(200).json(
    { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.zX5MPQtbjoNAS7rpsx_hI7gqGIlXOQq758dIqyBVxxY' }
  )
});

app.post('/team/pokemons', () => {
  res.status(200).send('Hello World!')
});

app.get('/team', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  res.status(200).send('Hello World!')
})

app.delete('/team/pokemons/:pokeid', (req, res) => {
  res.status(200).send('Hello World!')
});

app.put('/team', (req, res) => {
  res.status(200).send('Hello World!')
});



app.listen(port, () => {
  console.log('Server at port 3000');
})

exports.app = app;