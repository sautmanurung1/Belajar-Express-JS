const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')

router.post('/register', authController.RegisterUserController)
router.post('/login', authController.LoginUserController)
module.exports = router