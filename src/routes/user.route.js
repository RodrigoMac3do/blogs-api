const express = require('express');
const controller = require('../controllers');
const middleware = require('../middlewares');

const router = express.Router();

router.get('/', middleware.auth.validateToken, controller.user.findAll);
router.get('/:id', middleware.auth.validateToken, controller.user.findById);
router.post('/', controller.user.create);

module.exports = router;
