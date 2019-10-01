const { Resturant, User } = require('./index.js');

const updateResturant = (ID, num_recommendations, who_recommended) => {
  return Resturant.findOneAndUpdate({ ID }, { num_recommendations, who_recommended })
}

const updateUserRec = (ID, recommendations) => {
  return Resturant.findOneAndUpdate({ ID }, { recommendations })
}

const getResturantsByLocation = (city) => {
  return Resturant.find({city}).limit(20);
};

const getOneResturant = (ID) => {
  return Resturant.findOne({ ID }).limit(1);
};

const getRandomNum = (min, max) => {
  return Math.ceil(Math.random() * (max - min) + min);
}

const getRandomResturants = () => {
  return Resturant.find({ })
}

const getOneUser = (ID) => {
  return User.findOne({ ID }).limit(1);
};

const postUser = (ID, username, profile_picture, bio, recommendations,
  past_visited, follows, followed_by, posts) => {
  return User.create({ ID, username, profile_picture, bio, recommendations,
    past_visited, follows, followed_by, posts });
};

const updateUserPast = (ID, past_visited) => {
  return User.findOneAndUpdate({ ID }, { past_visited })
}

const updateUserFollowing = (ID, follows) => {
  return User.findOneAndUpdate({ ID }, { follows })
}

const updateUserFollowedBy = (ID, followed_by) => {
  return User.findOneAndUpdate({ ID }, { followed_by })
}

const updateUserBio = (ID, bio) => {
  return User.findOneAndUpdate({ ID }, { bio })
}

const updateUserPost = (ID, posts) => {
  return User.findOneAndUpdate({ ID }, { posts })
};

const updateUserPic = (ID, profile_picture) => {
  return User.findOneAndUpdate({ ID }, { profile_picture })
};

module.exports = { 
  updateResturant,
  updateUserRec,
  getResturantsByLocation,
  getOneResturant,
  getRandomResturants,
  getOneUser,
  postUser,
  updateUserPast,
  updateUserFollowing,
  updateUserFollowedBy,
  updateUserBio,
  updateUserPost,
  updateUserPic 
}