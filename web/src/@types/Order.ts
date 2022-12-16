export interface OrderProps {
  _id: string
  table: string
  status: string
  products: Array<ProductProps>
}

interface ProductProps {
  _id: string
  quantity: number
  product: {
    name: string
    imagePath: string
    price: number
  }
}
