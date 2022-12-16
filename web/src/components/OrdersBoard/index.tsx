//REACT
import { useState } from 'react'
//INTERFACE
import { OrderProps } from '../../@types/Order'
//COMPONENTES && STYLED COMPONENTS
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
  function handleCloseModal() {
    setIsModalVisible(false)
    setSelectedOrder(null)
  }

  return(
    <Board>
      <Modal closeModal={handleCloseModal} visible={isModalVisible} order={selectedOrder}/>
      <h3>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </h3>

      {orders.length > 0 && (
        <OrderContainer>
          {orders.map(order => {return(
            <button type='button' key={order._id} onClick={() => handleOpenOrder(order)}>
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          )})}
        </OrderContainer>
      )}
    </Board>
  )
}