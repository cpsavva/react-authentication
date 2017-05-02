const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
const PassLocStrat = require('passort-local');
const jwtSecret = ('makeanallybeanally');


module.exports = new PassLocStrat({

	usernameField : 'email',
    passwordField : 'password',
    session: false,
    passReqToCallback : true // allows us to pass back the entire request to the callback
    }, (req, email, password, done) => {
    	userData = {
    		email: email,
    		password: password
    	},

        return User.findOne({ email: userData.email}, (err, user) => {
            // if there are any errors, return the error before anything else
            if (err){return done(err);}



         	return user.comparePassord(userData.password, (passwordErr, isMatch) => 
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
});



