import { Router } from 'express'
import multer from 'multer'
import path from 'node:path'
import { createCategory } from './app/useCases/category/createCategory'
import { listCategories } from './app/useCases/category/listCategories'
import { createProduct } from './app/useCases/product/createProduct'
import { listProducts } from './app/useCases/product/listProducts'

export const router = Router()

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'))
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`)
    },
  })
})

//LIST CATEGORY
router.get('/categories', listCategories)

//CREATE CATEGORY
router.post('/categories', createCategory)

//GET PRODUCT BY CATEGORY
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('OK')
})

//LIST PRODUCT
router.get('/products', listProducts)

//CREATE PRODUCT
router.post('/products', upload.single('image'), createProduct)

//LIST ORDER
router.get('/orders', (req, res) => {
  res.send('OK')
})

//CREATE ORDER
router.post('/orders', (req, res) => {
  res.send('OK')
})

//CHANGE ORDER STATUS
router.patch('/orders/:orderId', (req, res) => {
  res.send('OK')
})

//DELETE / CANCEL ORDER
router.delete('/orders/:orderId', (req, res) => {
  res.send('OK')
})