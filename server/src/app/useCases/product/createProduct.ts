import { Products } from '../../models/Products'
import { Request, Response } from 'express'

export async function createProduct(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename

    const { category, description, ingredients, name, price } = req.body
   
    const product = await Products.create({
      name,
      description,
      imagePath,
      price: Number(price),
      category,
      ingredients: JSON.parse(ingredients)
    })

    res.status(201).json(product)

  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}