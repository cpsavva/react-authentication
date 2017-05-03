const applySignup = require('./local-signup');
const applyLogin = require('./local-login');

var configPassport = (passport)=> {
	applySignup(passport);
	applyLogin(passport);
}

module.exports = configPassport;


