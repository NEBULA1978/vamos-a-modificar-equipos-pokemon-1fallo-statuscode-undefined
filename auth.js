// const passport = require('passport');
// const LocalStrategy = require('passport-local');

const JwtStrategy = require('passport-jwt').Strategy,
  ExtractJWT = require('passport-jwt').ExtractJwt;

module.exports = passport => {
  const opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme("JWT"),
    secretOrKey: 'secretPassword'
  }
  passport.use(new JwtStrategy(opts, (decoded, done) => {
    console.log('decoded jwt', decoded);
    return done(null, decoded);
  }));

}