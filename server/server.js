require('dotenv').config()
const http = require('http')
const app = require('./app')
const connectDb = require('./services/db')

const server = http.createServer(app)
const port = process.env.PORT || 5001

const startServer = async () => {

  await connectDb()

  server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })
}

startServer()
