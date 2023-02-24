const express = require('express');
const controller = require('../controllers');
const middleware = require('../middlewares');

const router = express.Router();

router.get('/', middleware.auth, controller.categories.findAll);

router.post('/', middleware.auth, controller.categories.create);

module.exports = router;
