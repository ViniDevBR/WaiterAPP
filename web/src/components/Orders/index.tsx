
import { OrderContainer, Board, Container } from './styles'


export function Orders() {
  return(
    <Container>
      <Board>
        <h3>
          <span>🕒</span>
          <strong>Fila de espera</strong>
          <span>(1)</span>
        </h3>

        <OrderContainer>
          <button type='button'>
            <strong>Mesa 2</strong>
            <span>2 itens</span>
          </button>
          <button type='button'>
            <strong>Mesa 2</strong>
            <span>2 itens</span>
          </button>
        </OrderContainer>
      </Board>
    </Container>
  )
}