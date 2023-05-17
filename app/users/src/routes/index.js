const express = require('express')
const { addUser, listUser } = require('../controllers/user')
const { userLogin } = require('../controllers/auth')
const router = express.Router()

router.get('/', listUser)
router.post('/register', addUser)
router.post('/login', userLogin)

module.exports = router
