const express = require('express');
const router = express.Router();
const API = require('../controllers/api');

// Routes for user authentication
router.post('/register', API.register);
router.post('/login', API.login);
router.post('/logout', API.logout);

module.exports = router;
