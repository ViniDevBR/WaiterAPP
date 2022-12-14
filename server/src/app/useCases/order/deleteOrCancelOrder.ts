import { Order } from '../../models/Order'
import { Request, Response } from 'express'

export async function deleteOrCancelOrder(req: Request, res: Response) {
  try {
    const { orderId } = req.params
    await Order.findByIdAndDelete(orderId)

    res.sendStatus(204)

  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}