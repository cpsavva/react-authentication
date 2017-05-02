var axios = require('axios');

var authmiddle = {

	getLogin: function(){
		console.log('made it to authmiddle');
		return axios.get('/login').then(function (response){
			console.log('authmiddle '+ response.data)
			return response.data
		})
		.catch(function(error) {
	    	console.log(error);
	    })
	 },

	getSignup: function(){
		console.log('made it to authmiddle');
		return axios.post('/signup').then(function(response){
			console.log('authmiddle '+ response.data)
			return response.data
		})
		.catch(function(error){
			console.log(error)
		})
	},
};

module.exports = authmiddle;