var router = require('express').Router();
let {
  postRestaurant,
  getUsers,
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
  // updateUserPost,
  updateUserPass,
  updateUserPic,
  getUserProfileInfo,
  updateUserProfileInfo
} = require('./controller.js')

router
  .route('/restaurant/:ID')
    .post(postRestaurant)
    .put(updateRestaurant)
router
    .route('/user')
    .get(getUsers)
    .post(postUser)
router
  .route('/rec/:ID')
    .put(updateUserRec)
router
  .route('/user/:ID')
    .get(getOneUser)
router
  .route('/past/:ID')
    .put(updateUserPast)
router
  .route('/following/:ID')
    .put(updateUserFollowing)
router
  .route('/followedBy/:ID')
    .put(updateUserFollowedBy)
router  
    .route('/bio/:ID')
    .put(updateUserBio)
  // .route('/userPost')
  //   .put(updateUserPost)
router
  .route('/pass/:ID')
    .put(updateUserPass)
router 
  .route('/pic/:ID')
    .put(updateUserPic)
router
  .route('/profile/:email')
    .get(getUserProfileInfo)
    .put(updateUserProfileInfo)

module.exports = router;

