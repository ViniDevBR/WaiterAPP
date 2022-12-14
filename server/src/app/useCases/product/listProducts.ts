import { Products } from '../../models/Products'
import { Request, Response } from 'express'

export async function listProducts(req: Request, res: Response) {
  try {
    const products = await Products.find()

    res.json(products)

  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}