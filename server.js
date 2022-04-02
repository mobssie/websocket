const express = require('express')
const app = express()

app.use('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
})

app.listen(9000)

const WebSocket = require('ws')
const socket = new WebSocket.Server({
  port: 9001
})

socket.on('connection', (ws, req)=>{
  ws.on('message', (msg)=>{
    console.log('받은 메세지:' + msg)
    ws.send(' 서버가 보낸 메세지 ')
  })
})