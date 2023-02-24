const { Router } = require('express');
const routes = require('./index');

const router = Router();

router.use('/login', routes.login);

router.use('/user', routes.user);

router.use('/categories', routes.categories);

router.use('/post', routes.blogPosts);

module.exports = router;
