const router = require('express').Router()
const getProducts = require('./controller.js');


router
  .route('/search')
  .get(getProducts)

module.exports = router;