import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: #D73035;
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    h1 {
      color: #fff;
      font-size: 3.2rem;
      margin-bottom: 6px;
    }

    h2 {
      color: #fff;
      font-size: 1.6rem;
      font-weight: 400;
      opacity: 0.9;
    }
  }
`