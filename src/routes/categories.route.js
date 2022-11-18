const express = require('express');
const controller = require('../controllers');
const middleware = require('../middlewares');

const router = express.Router();

router.get('/', middleware.auth.validateToken, controller.categories.findAll);
router.post('/', middleware.auth.validateToken, controller.categories.create);

module.exports = router;
