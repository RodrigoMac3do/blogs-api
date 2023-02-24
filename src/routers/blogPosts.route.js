const express = require('express');
const controller = require('../controllers');
const middleware = require('../middlewares');

const router = express.Router();

router.get('/', middleware.auth, controller.blogPosts.findAll);

router.get('/search', middleware.auth, controller.blogPosts.findByTerm);

router.get('/:id', middleware.auth, controller.blogPosts.findById);

router.post('/', middleware.auth, controller.blogPosts.create);

router.put('/:id', middleware.auth, controller.blogPosts.update);

router.delete('/:id', middleware.auth, controller.blogPosts.remove);

module.exports = router;
