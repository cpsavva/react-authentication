
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User.js');










module.exports = (passport)=> {

	passport.serializeUser((user, done)=>{
		return done(null, user.id);
	});

	passport.deserializeUser((id, done)=>{
		return User.findById(id, (err, user)=>{
			return done(err, user);
		});
	});

	//SIGNUP STRATEGY

	passport.use('local-signup', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqtoCallback: true //allows for whole req to be passed back
	}, function(req, email, password, done){

		process.nextTick(()=>{
			return User.findOne({'local.email': email}, (err,user)=>{
				if(err) return done(err);

				if(user){
					done(null, false. req.flash('signupMessage', 'That email is already taken.'))
				} else {
					var newUser = new User();

					newUser.local.email = email;
					newUser.local.password = newUser.generateHash(password);
					// newUser.local.profname = req.body.profname;
					// newUser.local.condition = req.body.condition;
					// newUser.local.favouriteSnack = req.body.favouriteSnack;

					//save user
					newUser.save(function(err){
						if(err) throw err;

						return  done(null, newUser)
					});
				}
				
			})
		})

	}));

	//LOGIN STRATEGY

	passport.use('local-login', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqtoCallback: true
	}, (req, email, password, done)=>{
		User.findOne({'local.email': email}, (err, user) => {

			if(err){return doner(err)};

			if(!user){
				return done(null, false, req.flash('loginMessage', 'No user found'));
			};

			if(!user.validPassword(password)){
				return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
			}
			else{
			return done(null, user);}
		});

	}
	))

};