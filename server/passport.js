
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User.js');


module.exports = (passport)=> {

	passport.serializeUser(function(user, done){
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done){
		User.findById(id, function(err, user){
			done(err, user);
		});
	});

	//SIGNUP STRATEGY

	passport.use('local-signup', new LocalStrategy({
		usernameField: 'username',
		passwordField: 'password',
		passReqtoCallback: true //allows for whole req to be passed back
	}, function(username, password, done){
		console.log('req '+ req + ' username ' + username + ' password ' + password)
		process.nextTick(function(){
			User.findOne({'username': username}, function(err, user){
				if(err) return done (err);

				if(user){
					return done(null, false. req.flash('signupMessage', 'That email is already taken.'))
				} else {
					var newUser = new User();

					newUser.username = username;
					newUser.password = password;
					// newUser.local.profname = req.body.profname;
					// newUser.local.condition = req.body.condition;
					// newUser.local.favouriteSnack = req.body.favouriteSnack;

					//save user
					newUser.save(function(err){
						if(err) throw err;

						console.log('saved!');
					});
				}
				
			})
		})

	}));

	//LOGIN STRATEGY

	passport.use('local-login', new LocalStrategy({
		usernameField: 'username',
		passwordField: 'password',
		passReqtoCallback: true
	}, function(username, password, done){
		User.findOne({'username': username}, function(err, user){

			if(err){return done(err)};

			if(!user){
				console.log('not user')
				return done(null, false);
			} else {

				user.comparePassword(password, function(err, isMatch) {
		            if (err) throw err;
		            console.log('password', isMatch)
		        })
			}
			return done(null, user);
		});

	}
	))

};