const { Resturant, User } = require('./index.js');

const postResturant = (ID, num_recommendations, who_recommended) => {
  //when user adds resturant to reccomendations or takes off reccomendations
  return Resturant.create({ ID, num_recommendations, who_recommended })
}

const updateUserRec = (ID, recommendations) => {
  //when user adds resturant to reccomendations or takes off reccomendations
  return Resturant.findOneAndUpdate({ ID }, { recommendations })
}

// const getResturantsByLocation = (city) => {
//   //when user searches
//   return Resturant.find({city}).limit(20);
// };

// const getOneResturant = (ID) => {
//   //when user clicks on a resturant
//   return Resturant.findOne({ ID }).limit(1);
// };

// const getRandomNum = (min, max) => {
//   return Math.ceil(Math.random() * (max - min) + min);
// }

// const getRandomResturants = () => {
//   //incomplete for main page when user sees main global page
//   return Resturant.find({ })
// }

const getOneUser = (ID) => {
  return User.findOne({ ID });
};

const postUser = (ID, username, profile_picture, bio, recommendations,
  past_visited, follows, followed_by, posts) => {
  //when user creates account or logins first time using fb
  return User.create({
    ID, username, profile_picture, bio, recommendations,
    past_visited, follows, followed_by, posts
  });
};

const updateUserPast = (ID, past_visited) => {
  //when user add a location to their past visited
  return User.findOneAndUpdate({ ID }, { past_visited })
}

const updateUserFollowing = (ID, follows) => {
  //when user adds another user
  return User.findOneAndUpdate({ ID }, { follows })
}

const updateUserFollowedBy = (ID, followed_by) => {
  //when another user adds you
  return User.findOneAndUpdate({ ID }, { followed_by })
}

const updateUserBio = (ID, bio) => {
  //when user updates their bio
  return User.findOneAndUpdate({ ID }, { bio })
}

// const updateUserPost = (ID, posts) => {
//   //when user posts MVP+
//   return User.findOneAndUpdate({ ID }, { posts })
// };

const updateUserPic = (ID, profile_picture) => {
  //when user updates their pic
  return User.findOneAndUpdate({ ID }, { profile_picture })
};

module.exports = {
  updateResturant,
  updateUserRec,
  // getResturantsByLocation,
  // getOneResturant,
  // getRandomResturants,
  getOneUser,
  postUser,
  updateUserPast,
  updateUserFollowing,
  updateUserFollowedBy,
  updateUserBio,
  updateUserPost,
  updateUserPic
}