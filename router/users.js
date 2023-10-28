const express = require('express');
const router = express.Router();
const Controller = require('../controller/usersController')

router.get('/', Controller.getAllUsers);
router.post('/register', Controller.registerUser);
router.post('/login', Controller.loginUser);

module.exports = router;