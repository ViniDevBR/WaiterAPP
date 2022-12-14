import express from 'express'
import mongoose from 'mongoose'
import { router } from './router'
import path from 'node:path'


//npm run dev and conect to mongoDB Compass
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