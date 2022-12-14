//INTERFACE
import { useEffect, useState } from 'react'
import { OrderProps } from '../../@types/Order'
//COMPONENT & STYLED COMPONENTS
import { OrdersBoard } from '../OrdersBoard'
import { Container } from './styles'
//BACK END
import { API } from '../../services/api'
import socketIo from 'socket.io-client'


export function Orders() {
  const [orders, setOrders] = useState<Array<OrderProps>>([])

  useEffect(() => {
    const socket = socketIo('http://localhost:4444', {
      transports: ['websocket']
    })

    socket.on('newOrder', (order: OrderProps) => {
      setOrders(prevState => prevState.concat(order))
    })
  },[])

  useEffect(() => {
    API.get('/orders')
      .then(({ data }) => setOrders(data))
  },[])

  const waiting = orders.filter(order => order.status === 'Waiting')
  const production = orders.filter(order => order.status === 'Production')
  const done = orders.filter(order => order.status === 'Done')

  function handleCancelOrder(orderId: string) {
    setOrders(prevState => prevState.filter(order => order._id !== orderId))
  }

  function handleChangeOrderStatus(orderId: string, newStatus: OrderProps['status']) {
    setOrders(prevState => prevState.map(order => (
      order._id === orderId
        ? {...order, status: newStatus}
        : order
    )))
  }

  return (
    <Container>
      <OrdersBoard
        onCancelUpdate={handleCancelOrder}
        onChangeUpdate={handleChangeOrderStatus}
        icon="🕒"
        title="Fila de espera"
        orders={waiting}
      />
      <OrdersBoard
        onCancelUpdate={handleCancelOrder}
        onChangeUpdate={handleChangeOrderStatus}
        icon="🍺"
        title="Em preparação"
        orders={production}
      />
      <OrdersBoard
        onCancelUpdate={handleCancelOrder}
        onChangeUpdate={handleChangeOrderStatus}
        icon="✅"
        title="Pronto"
        orders={done}
      />
    </Container>
  )
}
