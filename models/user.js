var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  email:  String,
  password: String,
  firstname: String,
  lastname: String,
  gender: String,
  mobile: String,
  created: String,
  image: String
});

module.exports =  mongoose.model('User', userSchema);