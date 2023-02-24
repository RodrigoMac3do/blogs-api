const express = require('express');
const controller = require('../controllers');
const middleware = require('../middlewares');

const router = express.Router();

router.get('/', middleware.auth, controller.user.findAll);

router.get('/:id', middleware.auth, controller.user.findById);

router.post('/', controller.user.create);

router.delete('/me', middleware.auth, controller.user.remove);

module.exports = router;
