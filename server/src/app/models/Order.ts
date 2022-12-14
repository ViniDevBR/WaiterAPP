import { model, Schema } from 'mongoose'

export const Order = model('Order', new Schema({
  table: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Waiting', 'Production', 'Done'],
    default: 'Waiting'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  products: {
    required: true,
    type: [{
      product: {
        type: Schema.Types.ObjectId,
        ref: 'Products'
      },
      quantity: {
        type: Number,
        default: 1
      }
    }]
  }
}))