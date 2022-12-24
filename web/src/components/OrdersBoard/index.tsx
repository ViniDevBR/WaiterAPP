//REACT
import { useState } from 'react'
//INTERFACE
import { OrderProps } from '../../@types/Order'
import { API } from '../../services/api'
//COMPONENTES && STYLED COMPONENTS
import { Modal } from '../Modal'
import { Board, OrderContainer } from './styles'
import { toast } from 'react-toastify'


interface Props {
  title: string
  icon: string
  orders: Array<OrderProps>
  onCancelUpdate: (orderId: string) => void
}

export function OrdersBoard({ icon, orders, title, onCancelUpdate }: Props) {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [selectedOrder, setSelectedOrder] = useState<OrderProps | null>(null)
  const [isLoading, setIsLoading ] = useState<boolean>(false)

  function handleOpenOrder(order: OrderProps) {
    setIsModalVisible(true)
    setSelectedOrder(order)
  }
  function handleCloseModal() {
    setIsModalVisible(false)
    setSelectedOrder(null)
  }
  async function handleCancelOrder() {
    setIsLoading(true)
    const id = selectedOrder!._id
    await API.delete(`/orders/${id}`)

    setIsLoading(false)

    const table = selectedOrder!.table
    toast.success(`O pedido ${table} foi cancelado com sucesso!`)

    handleCloseModal()
    onCancelUpdate(id)
  }


  return(
    <Board>
      <Modal
        onCancelOrder={handleCancelOrder}
        closeModal={handleCloseModal}
        visible={isModalVisible}
        order={selectedOrder}
        loading={isLoading}
      />
      <h3>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </h3>

      {orders.length > 0 && (
        <OrderContainer>
          {orders.map(order => {
            return(
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