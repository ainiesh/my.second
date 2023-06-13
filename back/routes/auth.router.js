const router = require('express').Router()
const { login, signup } = requiere('../controllers/auth.controller.js')

router.post('/login', login )
router.post('/signup', signup)


module.exports = 