//REACT
import { useEffect } from 'react'
//STYLED COMPONENTS
import { Overlay, Content, Header, Status, TypeOfOrder, OrderDetails, Item, ProductDetails, Total, Actions, Button } from './styles'
//IMG
import closeIcon from '../../assets/images/close-icon.svg'
//INTERFACE & UTILS
import { OrderProps } from '../../@types/Order'
import { formatCoin } from '../../utils/formatCoin'


interface Props {
  visible: boolean
  order: OrderProps | null
  closeModal: VoidFunction
  onCancelOrder: () => Promise<void>
  loading: boolean
  onChangeStatus: () => Promise<void>
}

export function Modal({ order, visible, ...props }: Props) {
  if(!visible || !order){
    return null
  }

  const totalValue = order.products.reduce((totalSum, {product, quantity}) => {
    return totalSum + (product.price * quantity)
  }, 0)

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if(event.key === 'Escape'){
        props.closeModal()
      }
    }

    document.addEventListener('keydown',handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  },[props.closeModal])

  return(
    <Overlay>
      <Content>
        <Header>
          <h3>Mesa {order.table}</h3>
          <button onClick={props.closeModal}>
            <img src={closeIcon} alt="Fechar Menu" />
          </button>
        </Header>

        <Status>
          <p>Status do pedido</p>

          <TypeOfOrder>
            <span>
              {order.status === 'Waiting' && '🕒'}
              {order.status === 'Production' && '👩‍🍳'}
              {order.status === 'Done' && '✅'}
            </span>
            <strong>
              {order.status === 'Waiting' && 'Fila de espera'}
              {order.status === 'Production' && 'Em preparação'}
              {order.status === 'Done' && 'Pronto'}
            </strong>
          </TypeOfOrder>
        </Status>

        <OrderDetails>
          <strong>Itens</strong>

          {order.products.map(({_id, product, quantity}) => {
            return (
              <Item key={_id}>
                <img
                  src={`http://localhost:4444/uploads/${product.imagePath}`}
                  alt={product.name}
                  width='56'
                  height='28'
                />
                <span className='quantity'>{quantity}x</span>

                <ProductDetails>
                  <strong>{product.name}</strong>
                  <span>{formatCoin(product.price)}</span>
                </ProductDetails>
              </Item>
            )})}

          <Total>
            <span>Total</span>
            <strong>{formatCoin(totalValue)}</strong>
          </Total>
        </OrderDetails>

        <Actions>
          {order.status !== 'Done' && (
            <Button onClick={props.onChangeStatus} variation='secondary' disabled={props.loading}>
              <span>
                {order.status === 'Waiting' && '👩‍🍳'}
                {order.status === 'Production' && '✅'}
              </span>
              <strong>
                {order.status === 'Waiting' && 'Iniciar Produção'}
                {order.status === 'Production' && 'Finalizar Pedido'}
              </strong>
            </Button>
          )}
          <Button disabled={props.loading} onClick={props.onCancelOrder}>
            Cancelar Pedido
          </Button>
        </Actions>
      </Content>
    </Overlay>
  )
}