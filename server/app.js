const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const api = require('./routes/api')
const path = require('path')

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "..", "client", "build")))
app.use('/api', api)

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"))
})

module.exports = app