const express = require('express');
const router = express.Router();

const { Get } = require('../controller/homeController.js');

router.get('/show', Get)

module.exports = router