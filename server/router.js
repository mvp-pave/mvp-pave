var router = require('express').Router();
let {
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
  // updateUserPost,
  updateUserPic
} = require('./controller.js')

router
  .route('/restaurant/:ID')
    .post(postRestaurant)
    .put(updateRestaurant)
router
    .route('/user')
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
  .route('/pic/:ID')
    .put(updateUserPic)

module.exports = router;

