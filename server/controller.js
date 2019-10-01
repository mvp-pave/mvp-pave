const { 
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
} = require('../database/dbHelpers.js');

const getProducts = (req, res) => {
  Product.find()
    .then(data => res.status(200).send(data))
    .catch(err => res.status(400).send(err))
}

module.exports = getProducts;