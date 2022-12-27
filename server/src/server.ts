//EXPRESS & NODE
import express from 'express'
import path from 'node:path'
import http from 'node:http'
import { router } from './router'
//MONGO
import mongoose from 'mongoose'
//WEB SOCKET
import { Server } from 'socket.io'


//npm run dev
const app = express()
const server = http.createServer(app)
export const io = new Server(server)


mongoose.set('strictQuery', true)
mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const port = 4444
    
    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.setHeader('Access-Control-Allow-Methods', '*')
      res.setHeader('Access-Control-Allow-Headers', '*')

      next()
    })
    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
    app.use(express.json())
    app.use(router)

    server.listen(port, () => {
      console.log('SERVER ONLINE MONSTÃO')
    })
  })
  .catch(() => console.log('MONGO FALHOU'))