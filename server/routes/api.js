const express = require('express')
const authRouter = require('./auth.route')

const api = express.Router()

api.use('/', authRouter)

module.exports = api