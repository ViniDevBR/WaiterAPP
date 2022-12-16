import { Overlay, Content, Header, Status, TypeOfOrder, OrderDetails } from './styles'
import closeIcon from '../../assets/images/close-icon.svg'
import { OrderProps } from '../../@types/Order'

interface Props {
  visible: boolean
  order: OrderProps | null
}

export function Modal(props: Props) {
  if(!props.visible || !props.order){
    return null
  }

  return(
    <Overlay>
      <Content>
        <Header>
          <h3>Mesa {props.order.table}</h3>
          <button>
            <img src={closeIcon} alt="Fechar Menu" />
          </button>
        </Header>

        <Status>
          <p>Status do pedido</p>

          <TypeOfOrder>
            <span>🕒</span>
            <strong>Fila de espera</strong>
          </TypeOfOrder>
        </Status>

        <OrderDetails>
          <strong>Itens</strong>


        </OrderDetails>
      </Content>
    </Overlay>
  )
}