const {
  postRestaurant,
  updateRestaurant,
  updateUserRec,
  // getRestaurantsByLocation,
  // getOneRestaurant,
  // getRandomRestaurants,
  getOneUser,
  getAllUsers,
  postUser,
  updateUserPast,
  updateUserFollowing,
  updateUserFollowedBy,
  updateUserBio,
  // updateUserPost,
  updateUserPass,
  updateUserPic,
  getUserProfileInfo,
  updateUserProfileInfo
} = require('../database/dbHelpers.js');

let controller = {
  postRestaurant: (req, res) => {
    let { num_recommendations, who_recommended } = req.body;
    let { ID } = req.params;
    postRestaurant(ID, num_recommendations, who_recommended)
      .then(() => res.status(201).send('Restaurant Post Worked!'))
      .catch((err) => res.status(401).send(err))
  },
  updateRestaurant: (req, res) => {
    let { num_recommendations, who_recommended } = req.body;
    let { ID } = req.params;
    updateRestaurant(ID, num_recommendations, who_recommended)
      .then(() => res.status(200).send('Restaurant Update Worked!'))
      .catch((err) => res.status(400).send(err))
  },
  postUser: (req, res) => {
    let { ID, email, password, firstName, lastName, profile_picture, bio, recommendations, past_visited, follows, followed_by, posts } = req.body;
    postUser(ID, email, password, firstName, lastName, profile_picture, bio, recommendations, past_visited, follows, followed_by, posts)
      .then(() => res.status(201).send('User Account Posted!'))
      .catch((err) => res.status(401).send(err))
  },
  updateUserRec: (req, res) => {
    let { recommendations } = req.body;
    let { ID } = req.params;
    updateUserRec(ID, recommendations)
      .then(() => res.status(200).send('User Recommendations Updated!')
        .catch((err) => res.status(400).send(err)))
  },
  getOneUser: (req, res) => {
    let { ID } = req.params;
    getOneUser(ID)
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(400).send(err))
  },
  getUsers: (req, res) => {
    getAllUsers()
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(400).send(err))
  },
  updateUserPast: (req, res) => {
    let { ID } = req.params;
    let { past_visited } = req.body;
    updateUserPast(ID, past_visited)
      .then(() => res.status(200).send('User Past Updated!'))
      .catch((err) => res.status(400).send(err))
  },
  updateUserFollowing: (req, res) => {
    let { ID } = req.params;
    let { follows } = req.body;
    updateUserFollowing(ID, follows)
      .then(() => res.status(200).send('User Following Updated!'))
      .catch((err) => res.status(400).send(err))
  },
  updateUserFollowedBy: (req, res) => {
    let { ID } = req.params;
    let { followed_by } = req.body;
    updateUserFollowedBy(ID, followed_by)
      .then(() => res.status(200).send('User Followed By Updated!'))
      .catch((err) => res.status(400).send(err))
  },
  updateUserBio: (req, res) => {
    let { ID } = req.params;
    let { bio } = req.body;
    updateUserBio(ID, bio)
      .then(() => res.status(200).send('User Bio Updated!'))
      .catch((err) => res.status(400).send(err))
  },
  updateUserPass: (req, res) => {
    let { ID } = req.params;
    let { password } = req.body;
    updateUserBio(ID, password)
      .then(() => res.status(200).send('User Password Updated!'))
      .catch((err) => res.status(400).send(err))
  },
  updateUserPic: (req, res) => {
    let { ID } = req.params;
    let { profile_picture } = req.body;
    updateUserPic(ID, profile_picture)
      .then(() => res.status(200).send('User Pic Updated!'))
      .catch((err) => res.status(400).send(err))
  },
  getUserProfileInfo: (req, res) => {
    let { email } = req.params;
    getUserProfileInfo(email)
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(400).send(err))
  },
  updateUserProfileInfo: (req, res) => {
    let { email } = req.params;
    console.log('what is email', email)
    let { profile_picture, bio } = req.body;
    console.log('what is img picture', profile_picture)
    updateUserProfileInfo(email, profile_picture, bio)
      .then(() => res.status(200).send('User Profile Updated!'))
      .catch((err) => res.status(400).send(err))
  }
}

module.exports = controller;
