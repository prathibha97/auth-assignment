const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const api = require('./routes/api')

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/api', api)

module.exports = app