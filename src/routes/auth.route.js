const express = require('express');
const controller = require('../controllers');

const router = express.Router();

router.post('/', controller.auth.verify);

module.exports = router;
