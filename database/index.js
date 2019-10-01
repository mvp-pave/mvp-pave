var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mvp');

var db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
});

db.once('open', function () {
  console.log('mongoose connected successfully');
});

var resturantSchema = mongoose.Schema({
  ID: Number,
  num_recommendations: Number,
  who_recommended: []
});

var Resturant = mongoose.model('Resturant', resturantSchema);

var userSchema = mongoose.Schema({
  ID: Number,
  username: String,
  profile_picture: String,
  bio: String,
  recommendations: [],
  past_visited: [],
  follows: [],
  followed_by: [],
  posts: []
});

var User = mongoose.model('User', userSchema);

module.exports = { Resturant, User };