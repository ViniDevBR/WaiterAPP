import styled from 'styled-components'


export const Board = styled.section`
  padding: 16px;
  border: 1px solid rgb(204, 204, 204, 0.4);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  > h3 {
    padding: 8px;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    gap: 8px;

    span {
      font-weight: 200;
    }
  }
`

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;

  button {
    background-color: #fff;
    border: 1px solid rgb(204, 204, 204, 0.4);
    height: 128px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;

    & + button {
      margin-top: 24px;
    }

    strong {
      font-weight: 500;
    }

    span {
      font-size: 1.4rem;
      color: #666;
    }
  }
`