const { Restaurant, User } = require('./index.js');

const postRestaurant = (ID, num_recommendations, who_recommended) => {
  //when user adds restaurant to recommendation for the first time for the restaurant
  return Restaurant.create({ ID, num_recommendations, who_recommended })
}

const updateRestaurant = (ID, num_recommendations, who_recommended) => {
  //when user adds restaurant to recommendation or takes off recommendations when the restaurant is already in db
  return Restaurant.findOneAndUpdate({ ID }, { num_recommendations, who_recommended })
}

const updateUserRec = (ID, recommendations) => {
  //when user adds restaurant to recommendation or takes off recommendation
  return User.findOneAndUpdate({ ID }, { recommendations })
}

// const getRestaurantsByLocation = (city) => {
//   //when user searches
//   return Restaurant.find({city}).limit(20);
// };

// const getOneRestaurant = (ID) => {
//   //when user clicks on a restaurant
//   return Restaurant.findOne({ ID }).limit(1);
// };

// const getRandomNum = (min, max) => {
//   return Math.ceil(Math.random() * (max - min) + min);
// }

// const getRandomRestaurants = () => {
//   //incomplete for main page when user sees main global page
//   return Restaurant.find({ })
// }

const getOneUser = (ID) => {
  return User.findOne({ ID });
};

const postUser = (ID, username, profile_picture, bio, recommendations, past_visited, follows, followed_by, posts) => {
  //when user creates account or logins first time using fb
  return User.create({
    ID, username, profile_picture, bio, recommendations, past_visited, follows, followed_by, posts
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
  postRestaurant,
  updateRestaurant,
  updateUserRec,
  // getRestaurantsByLocation,
  // getOneRestaurant,
  // getRandomRestaurants,
  getOneUser,
  postUser,
  updateUserPast,
  updateUserFollowing,
  updateUserFollowedBy,
  updateUserBio,
  updateUserPost,
  updateUserPic
}