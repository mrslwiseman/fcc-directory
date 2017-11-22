var mongoose = require('mongoose'),
    passportLocalMongoose = require('passport-local-mongoose');

let UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
  email: String,
  github: String,
  twitter: String,
  instagram: String
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema)
