const express = require('express');
const controller = require('../controllers');
const middleware = require('../middlewares');

const router = express.Router();

router.get('/', middleware.auth.validateToken, controller.blogPosts.findAll);
router.get('/:id', middleware.auth.validateToken, controller.blogPosts.findById);

module.exports = router;
