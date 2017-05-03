const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
const PassLocStrat = require('passport-local');
const jwtSecret = ('makeanallybeanally');

var userLogin = (req, email, password, done) => {
        userData = {
            email: email,
            password: password
        }

        return User.findOne({ email: userData.email}, (err, user) => {
            // if there are any errors, return the error before anything else
            if (err){return done(err);}



            return user.comparePassord(userData.password, (passwordErr, isMatch) => {
                if(err){return done(err)}


            // all is well, return successful user and token
                const payload = {
                    sub: user._id
                };

                const token = jwt.sign(payload, jwtSecret);
                const data = {
                    name: user.name
                }
                return done(null, token, data);
        }); 
    });
};


module.exports = function(passport){
    passport.use('local-login', new PassLocStrat({
    usernameField : 'email',
    passwordField : 'password',
    session: false,
    passReqToCallback : true // allows us to pass back the entire request to the callback
    }, userLogin));
}

