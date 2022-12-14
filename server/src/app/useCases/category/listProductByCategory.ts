import { Products } from '../../models/Products'
import { Request, Response } from 'express'

export async function listProductByCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params
    const productsByCategory = await Products.find().where('category').equals(categoryId)

    res.json(productsByCategory)

  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}