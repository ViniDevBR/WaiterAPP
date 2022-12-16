import styled from 'styled-components'

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5;
  background-color: rgb(0,0,0,0.8);
  backdrop-filter: blur(4.5px);
`

export const Content = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 32px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 2.4rem;
    padding: 0;
  }

  button {
    line-height: 0;
    border: 0;
    background: transparent;
  }
`

export const Status = styled.div`
  margin-block: 32px;

  p {
    font-size: 1.4rem;
    opacity: 0.8;
  }
`

export const TypeOfOrder = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`

export const OrderDetails = styled.div`

  > strong {
    font-size: 1.4rem;
    opacity: 0.8;
    font-weight: 500;
  }
`