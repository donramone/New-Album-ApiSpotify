const express = require('express')
/*
Client ID 896a18403d964cac950791a1c53e17de
Client Secret 7bcb013960a24ce2a39c00c744289a25 
*/
const client_id = '896a18403d964cac950791a1c53e17de' //process.env.SPOTIFY_CLIENT_ID
const client_secret = '7bcb013960a24ce2a39c00c744289a25'
const redirect_uri = "http://localhost:3000/callback" //"http://localhost:3000/auth/callback"

const port = 5000

var app = express();

app.get('/', (req, res) => {
    console.log(client_id)
    res.send('Hi!')
  })

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
  })