var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/User.js');
const jwt = require('jsonwebtoken');
const jwtSecret = 'makeanallybeanally';

module.exports = function(passport) {

    passport.use('local-signup', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {

                const newUser = new User();

                newUser.local.email    = email;
                newUser.local.password = generateHash(password);
                newUser.local.name = req.body.name;
                newUser.local.condition = req.body.condition;
                newUser.local.favouriteSnack = req.body.favouriteSnack;

                newUser.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, newUser);
                });
            }

        });    

        });

    }));

 
    passport.use('local-login', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {

        User.findOne({ 'local.email': email }, function(err, user) {
            // if there are any errors, return the error before anything else
            if (err)
                return done(err);

            // if no user is found, return the message
            if (!user)
                return done(null, false)
                // req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash

            // if the user is found but the password is wrong
            if (!user.validPassword(password))
                return done(null, false)
                 // req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata


            // all is well, return successful user and token
            const token = jwt.sign(payload, jwtSecret);
            const data = {
                name: user.name
            }
            return done(null, token, data);
        });

    }));

};

