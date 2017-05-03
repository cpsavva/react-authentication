

module.exports = (app, passport) => {

	app.post('/signup', passport.authenticate('local-signup', (req, res)=>{
		console.log(req.body);
		res.send(req.body);
	}));



	app.post('./login', passport.authenticate('local-login', (req, res)=>{
		console.log(req.body);
		res.send(req.body);
	}));

}