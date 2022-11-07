const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const jwt = require('jsonwebtoken');


const usersController = require('./controllers/users');
usersController.registerUser('bettatech', '1234');
// userController.registerUser('mastermind', '4321');

require('./auth')(passport);


const app = express();
// Añadimos un middledvwers
app.use(bodyParser.json());

const port = 3000;

app.get('/', (req, res) => {
  //req: es la request, la peticion
  // res: es la respuesata
  // console.log(req);
  res.status(200).send('Hello World!')
});

app.post('/login', (req, res) => {
  if (!req.body) {
    return res.status(400).send('Missing data');
  } else if (!req.body.user || !req.body.password) {
    return res.status(400).json({ mesasge: 'Missing data' });
  }
  usersController.checkUserCredentials(req.body.user, req.body.password, (err, result) => {
    if (err || !result) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: result }, 'secretPassword');
    res.status(200).json({ token: token });
  })

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