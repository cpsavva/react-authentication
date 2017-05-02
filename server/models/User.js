var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({

    local: {
        name: String,
        email: String,
        password: String,
        condition: String,
        favouriteSnack: String
    },

});

// methods ======================
userSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};

userSchema.pre('save', function saveHook(next) {
 	const user = this;

 // proceed further only if the password is modified or the user is new
 	if (!user.isModified('password')) return next();

	return bcrypt.genSalt((saltError, salt) => {

		if (saltError) { return next(saltError); }

 		return bcrypt.hash(user.password, salt, (hashError, hash) => {

	 		if (hashError) { return next(hashError); }

 // replace a password string with hash value
 			user.password = hash;

			return next();
		});
 	});
});

module.exports = mongoose.model('User', userSchema);

