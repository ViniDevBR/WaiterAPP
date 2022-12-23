//EXPRESS & NODE
import express from 'express'
import path from 'node:path'
import { router } from './router'
//MONGO
import mongoose from 'mongoose'

//npm run dev
mongoose.set('strictQuery', true)
mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express()
    app.listen(4444, () => {
      console.log('SERVER ONLINE MONSTÃO')
    })
    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
    app.use(express.json())
    app.use(router)
  })
  .catch(() => console.log('MONGO FALHOU'))