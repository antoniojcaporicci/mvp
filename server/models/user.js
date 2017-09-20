var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: String,
    password: String,
    favorites: []
});

var User = mongoose.model("User", userSchema);

module.exports = User;
