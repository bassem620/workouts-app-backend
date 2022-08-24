const express = require('express');
const router = express.Router()

// Controller Functions
const {loginUser, signupUser} = require('../controllers/userController')

// Login Router
router.post('/login', loginUser)

// SignUp Router
router.post('/signup', signupUser)

module.exports = router