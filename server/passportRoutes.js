

module.exports = (app, passport) => {

	app.post('/signup', passport.authenticate('local-signup',function(req, res){
		console.log('authmiddle' + req);
		// res.send(req.user);
	}));



	app.post('/login', passport.authenticate('local-login', function(req, res){
		console.log('signed in!')
		// console.log(req.body);
		// res.send(req.body);
	}));

}