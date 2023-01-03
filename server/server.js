require('dotenv').config()
const http = require('http')
const app = require('./app')

const server = http.createServer(app)
const port = process.env.PORT || 5001

const startServer = () =>{

  server.listen(port, ()=>{
      console.log(`Server listening on port ${port}`)
  })
}

startServer()
