//import the express dependency
const express = require('express')

//use express methods
const app = express()

//channel for our server to listen to client requests
const port = 3000

app.use(express.static('../public'))

//Server will listen to this port
app.listen(port, () => {
    console.log(`Success! Server is live on http://localhost:${port}`)
  })