const express = require('express')
const uploadImage = require('../controllers/upload.controller')
const verifyToken = require('../middleware/auth.middleware')
const upload = require('../services/file-upload')


const uploadRouter = express.Router()

uploadRouter.post('/', verifyToken, upload.single('file'), uploadImage)

module.exports = uploadRouter