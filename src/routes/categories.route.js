const express = require('express');
const controller = require('../controllers');
const middleware = require('../middlewares');

const router = express.Router();

router.post('/', middleware.auth.validateToken, controller.categories.create);

module.exports = router;
