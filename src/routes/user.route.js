const express = require('express');
const controller = require('../controllers');

const router = express.Router();

router.post('/', controller.user.create);

module.exports = router;
