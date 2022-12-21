//REACT
import { useState } from 'react'
//COMPONENTS
import { Header } from '../../components/Header'
import { Categories } from '../../components/Categories'
import { Menu } from '../../components/Menu'
import { Footer } from '../../components/Footer'
import { Modal } from '../../components/Modal'
import { Button } from '../../components/Button'
import { Cart } from '../../components/Cart'
//STYLED
import { Container, CenteredContainer } from './styles'
//TYPES
import { CartItemProps } from '../../@types/Cart'
import { IProduct } from '../../@types/Product'
import { ActivityIndicator } from 'react-native'


export function Home() {
  const [selectedTable, setSelectedTable] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [cartItem, setCartItem] = useState<CartItemProps[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  function handleSavedTable(table: string) {
    setSelectedTable(table)
  }
  function handleResetOrder() {
    setSelectedTable(null)
    setCartItem([])
  }
  function handleAddToCart(product: IProduct) {
    if (selectedTable === null) {
      setIsModalOpen(true)
    }

    setCartItem(prevState => {
      const itemIndex = prevState.findIndex(cartItem => cartItem.product._id === product._id)

      if(itemIndex < 0) {
        return prevState.concat({
          quantity: 1,
          product,
        })
      }

      const newCartItem = [...prevState]
      const newItem = newCartItem[itemIndex]

      newCartItem[itemIndex] = {
        ...newItem,
        quantity: newItem.quantity + 1
      }

      return newCartItem
    })
  }
  function handleDecrementToCart(product: IProduct) {
    setCartItem(prevState => {
      const itemIndex = prevState.findIndex(cartItem => cartItem.product._id === product._id)

      const item = prevState[itemIndex]

      if(item.quantity === 1) {
        const removeCartItem = [...prevState]
        removeCartItem.splice(itemIndex, 1)

        return removeCartItem
      }

      const newCartItem = [...prevState]
      const newItem = newCartItem[itemIndex]

      newCartItem[itemIndex] = {
        ...newItem,
        quantity: newItem.quantity - 1
      }

      return newCartItem
    })
  }

  return (
    <>
      <Container>
        <Header selectedTable={selectedTable} cancelOrder={handleResetOrder}/>

        {!isLoading && (
          <>
            <Categories />
            <Menu onAddToCart={handleAddToCart}/>
          </>
        )}
        {isLoading && (
          <CenteredContainer>
            <ActivityIndicator size='large' color='#d73035'/>
          </CenteredContainer>
        )}
      </Container>

      <Footer>
        {!selectedTable && (
          <Button
            isLoading={isLoading}
            onPress={() => setIsModalOpen(true)}
            title='Novo Pedido'
          />
        )}
        {selectedTable && (
          <Cart
            cartItem={cartItem}
            onAdd={handleAddToCart}
            onRemove={handleDecrementToCart}
            onConfirmedOrder={handleResetOrder}
          />
        )}
      </Footer>


      <Modal
        visible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSavedTable}
      />
    </>
  )
}
