const express = require('express')
const authRouter = require('./auth.route')
const uploadRouter = require('./upload.route')
const userRouter = require('./user.route')

const api = express.Router()

api.use('/auth', authRouter)
api.use('/user', userRouter)
api.use('/upload', uploadRouter)

module.exports = api