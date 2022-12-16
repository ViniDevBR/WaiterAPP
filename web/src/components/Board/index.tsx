import { useState } from 'react'
import { OrderProps } from '../../@types/Order'
import { Modal } from '../Modal'
import { Board, OrderContainer } from './styles'


interface Props {
  title: string
  icon: string
  orders: Array<OrderProps>
}

export function OrdersBoard({ icon, orders, title }: Props) {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [selectedOrder, setSelectedOrder] = useState<OrderProps | null>(null)

  function handleOpenOrder(order: OrderProps) {
    setIsModalVisible(true)
    setSelectedOrder(order)
  }

  return(
    <Board>
      <Modal visible={isModalVisible} order={selectedOrder}/>
      <h3>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </h3>

      {orders.length > 0 && (
        <OrderContainer>
          {orders.map(order => {return(
            <>
              <button type='button' key={order._id} onClick={() => handleOpenOrder(order)}>
                <strong>Mesa {order.table}</strong>
                <span>{order.products.length} itens</span>
              </button>
            </>
          )})}
        </OrderContainer>
      )}
    </Board>
  )
}