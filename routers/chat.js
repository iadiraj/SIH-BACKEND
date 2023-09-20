const express = require('express');
const validate = require('../middlewares/authenticate');
const chatController = require('../controllers/chatController');
const router = express.Router();
router.post('/ask', validate, chatController.ask);
module.exports = router;