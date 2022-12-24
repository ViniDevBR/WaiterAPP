import { ButtonHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

interface TButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variation?: 'secondary'
}

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
  width: 400px;
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

export const Item = styled.div`
  display: flex;
  margin-top: 16px;

  & + div {
    margin-top: 16px;
  }

  img {
    margin-top: 3px;
    border-radius: 6px;
    align-self: flex-start;
  }

  .quantity {
    align-self: flex-start;
    font-size: 1.4rem;
    color: #666;
    display: block;
    min-width: 20px;
    margin-left: 12px;
  }
`

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4px;

  > strong {
    font-weight: 600;
    margin-bottom: 4px;
  }

  span {
    font-size: 1.4rem;
    color: #666;
  }
`

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;

  > span {
    font-size: 1.4rem;
    font-weight: 500;
    opacity: 0.8;
  }
`

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  gap: 12px;
`

export const Button = styled.button<TButton>`
  color: #D73035;
  background-color: transparent;
  padding: 12px 24px;
  border: 0;
  width: 100%;
  font-weight: bold;
  display: flex;
  justify-content: center;

  ${({disabled}) => disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  `}

  ${(props) => props.variation === 'secondary' && css`
    background-color: #333;
    border-radius: 48px;
    color: #fff;
    gap: 8px;
  `}
`