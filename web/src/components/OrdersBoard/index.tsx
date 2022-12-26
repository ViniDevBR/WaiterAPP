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
  onChangeUpdate: (orderId: string, status: OrderProps['status']) => void
}

export function OrdersBoard({orders, ...props}: Props) {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [selectedOrder, setSelectedOrder] = useState<OrderProps | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  function handleOpenOrder(order: OrderProps) {
    setIsModalVisible(true)
    setSelectedOrder(order)
  }

  function handleCloseModal() {
    setIsModalVisible(false)
    setSelectedOrder(null)
  }

  async function handleCancelOrder() {
    try {
      setIsLoading(true)
      const id = selectedOrder!._id
      await API.delete(`/orders/${id}`)

      setIsLoading(false)

      const table = selectedOrder!.table
      toast.success(`O pedido da mesa ${table} foi cancelado com sucesso!`)

      props.onCancelUpdate(id)

    } catch (error) {
      console.log(error)
      toast.error('Não foi possivel cancelar o pedido. Detalhes do erro no console')

    } finally {
      handleCloseModal()
      setIsLoading(false)
    }
  }

  async function handleChangeOrderStatus() {
    try {
      setIsLoading(true)
      const id = selectedOrder!._id
      const table = selectedOrder!.table
      const newStatus = selectedOrder!.status === 'Waiting'
        ? 'Production'
        : 'Done'

      await API.patch(`/orders/${id}`, { status: newStatus })
      props.onChangeUpdate(id, newStatus)
      toast.success(`O pedido da mesa ${table} teve o status alterado com sucesso!`)

    } catch (error) {
      console.log(error)
      toast.error('Não foi possivel mudar o status do pedido. Detalhes do erro no console')

    } finally {
      setIsLoading(false)
      handleCloseModal()
    }
  }

  return(
    <Board>
      <Modal
        onChangeStatus={handleChangeOrderStatus}
        onCancelOrder={handleCancelOrder}
        closeModal={handleCloseModal}
        visible={isModalVisible}
        order={selectedOrder}
        loading={isLoading}
      />
      <h3>
        <span>{props.icon}</span>
        <strong>{props.title}</strong>
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