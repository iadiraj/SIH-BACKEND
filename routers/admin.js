const express = require('express');
const validate = require('../middlewares/authenticate');
const userController = require('../controllers/userController');
const userInfoController = require('../controllers/userInfoController');
const router = express.Router();
module.exports = router;