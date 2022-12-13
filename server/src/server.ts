import express from 'express'
import mongoose from 'mongoose'

//npm run dev and conect to mongoDB Compass
mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express()
    app.listen(4444, () => {
      console.log('SERVER ONLINE MONSTÃO')
    })
  })
  .catch(() => console.log('MONGO FALHOU'))