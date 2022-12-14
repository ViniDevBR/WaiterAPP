import { Order } from '../../models/Order'
import { Request, Response } from 'express'

export async function changeOrderStatus(req: Request, res: Response) {
  try {
    const { orderId } = req.params
    const { status } = req.body

    if(!['Waiting', 'Production', 'Done'].includes(status)){
      return res.status(400).json({
        error: 'status must be: Waiting, Production, Done'
      })
    }

    await Order.findByIdAndUpdate(orderId, { status })
    res.sendStatus(204)

  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}