import { Category } from '../../models/Category'
import { Request, Response } from 'express'

export async function createCategory(req: Request, res: Response) {
  try {
    const { icon, name } = req.body

    if(!name || !icon) {
      return res.status(400).json({
        error: 'There is missing something REQUIRED!!!'
      })
    }

    const category = await Category.create({ icon, name })

    res.sendStatus(201).json(category)

  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}