const express = require('express');
const controller = require('../controllers');
const middleware = require('../middlewares');

const router = express.Router();

router.get('/', middleware.auth.validateToken, controller.blogPosts.findAll);

router.get(
  '/:id',
  middleware.auth.validateToken,
  controller.blogPosts.findById,
);

router.post('/', middleware.auth.validateToken, controller.blogPosts.create);

router.delete(
  '/:id',
  middleware.auth.validateToken,
  controller.blogPosts.remove,
);
module.exports = router;
