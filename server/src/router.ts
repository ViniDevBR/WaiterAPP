//EXPRESS & NODE
import { Router } from 'express'
import path from 'node:path'
//MULTER
import multer from 'multer'
//ROUTES
import { createCategory } from './app/useCases/category/createCategory'
import { listCategories } from './app/useCases/category/listCategories'
import { listProductByCategory } from './app/useCases/category/listProductByCategory'
import { changeOrderStatus } from './app/useCases/order/changeOrderStatus'
import { createOrder } from './app/useCases/order/createOrder'
import { deleteOrCancelOrder } from './app/useCases/order/deleteOrCancelOrder'
import { listOrders } from './app/useCases/order/listOrders'
import { createProduct } from './app/useCases/product/createProduct'
import { listProducts } from './app/useCases/product/listProducts'
import { Category } from './app/models/Category'
import { Products } from './app/models/Products'

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
router.get('/categories/:categoryId/products', listProductByCategory)

//LIST PRODUCT
router.get('/products', listProducts)

//CREATE PRODUCT
router.post('/products', upload.single('image'), createProduct)

//LIST ORDER
router.get('/orders', listOrders)

//CREATE ORDER
router.post('/orders', createOrder)

//CHANGE ORDER STATUS
router.patch('/orders/:orderId', changeOrderStatus)

//DELETE / CANCEL ORDER
router.delete('/orders/:orderId', deleteOrCancelOrder)


//ROUTES FOR ERRORS DURING DEVELOPING
router.delete('/products/:id', async (req, res) => {
  const { id } = req.params
  const x = await Products.findByIdAndDelete(id)
  res.json(x)
})

router.patch('/products/:id',async (req, res) => {
  const { id } = req.params
  const { description } = req.body
  const x = await Products.findByIdAndUpdate(id, { description })
  res.json(x)
})

router.patch('/categories/:id',async (req, res) => {
  const { id } = req.params
  const { description } = req.body
  const x = await Category.findByIdAndUpdate(id, { description })
  res.json(x)
})

router.delete('/categories/:id',async (req, res) => {
  const { id } = req.params
  await Category.findByIdAndDelete(id)

  res.sendStatus(204)
})