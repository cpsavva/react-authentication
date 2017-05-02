const User = require('../models/User.js')
const passLocStrat = ('passport-local').Strategy;


module.exports = new passLocStrat({
	usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
}, (req, email, password, done) => {

    const newUser = new User();

    newUser.local.email    = email;
    newUser.local.password = generateHash(password);
    newUser.local.name = req.body.name;
    newUser.local.condition = req.body.condition;
    newUser.local.favouriteSnack = req.body.favouriteSnack;

    newUser.save((err) => {
        if (err) {return done(err);}
        
        return done(null, newUser);
    });
});