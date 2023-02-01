const mongoose = require('mongoose');
const UserSchema = mongoose.Schema(
    {
        username: String,

        password: String,

        usertype: String
    }
);
var UserModel = mongoose.model('users', UserSchema);
module.exports = { UserModel }