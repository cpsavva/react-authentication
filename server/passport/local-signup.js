const User = require('../models/User.js')
const passLocStrat = require('passport-local').Strategy;
var localSignup = (req, email, password, done) => {

    const newUser = new User();

    newUser.local.email    = email;
    newUser.local.password = password;
    newUser.local.name = req.body.name;
    newUser.local.condition = req.body.condition;
    newUser.local.favouriteSnack = req.body.favouriteSnack;

    newUser.save((err) => {
        if (err) {return done(err);}
        
        return done(null, newUser);
    });
};


module.exports = (passport) => {
    passport.use('local-signup',new passLocStrat({
    usernameField : 'email',
    passwordField : 'password',
    session: false,
    passReqToCallback : true
}, localSignup));
}

