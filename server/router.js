var router = require('express').Router();

router
  .route('/search')
  .get(getProducts)

module.exports = router;