var axios = require('axios');

var authmiddle = {

	getLogin: function(data){
		// console.log('made it to authmiddle');
		return axios.post('/auth/login',{
			email: data.email,
			password: password,

		}).then(function (response){
			console.log('authmiddle '+ response.data)
			return response.data

		}).catch(function(error) {
	    	console.log(error);
	    })
	 },

	getSignup: function(data){
			// console.log('made it to authmiddle');
		return axios.post('/signup',{
			email: data.email,
			password: data.password,
			name: data.name,
			condition: data.condition,
			favouriteSnack: data.favouriteSnack

		}).then((response) => {

			console.log('authmiddle '+ response.data)
			return response.data

		}).catch(function(error){
			console.log(error);
		})

	},

	// showUserInfo: function() {
 //        return axios.get('/api/profile').then(function(response) {
 //                console.log('made it to authmiddle '+ response.data);
 //                return response.data
 //            })
 //            .catch(function(error) {
 //                console.log(error);
 //            });
 //    },
};

module.exports = authmiddle;