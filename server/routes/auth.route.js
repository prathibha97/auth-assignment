const express = require('express')
// import { upload } from '../../services/file-storage.js'
// import { login, register } from '../controllers/auth.controller.js'
const {register} = require('../controllers/auth.controller')

const authRouter = express.Router()

authRouter.post('/register', register)
// authRouter.post('/login', login)

// export default authRouter
module.exports = authRouter