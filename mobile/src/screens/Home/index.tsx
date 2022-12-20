//REACT
import { useState } from 'react'
//COMPONENTS
import { Header } from '../../components/Header'
import { Categories } from '../../components/Categories'
import { Menu } from '../../components/Menu'
import { Footer } from '../../components/Footer'
import { Container } from './styles'
import { Modal } from '../../components/Modal'
import { Button } from '../../components/Button'
import { Cart } from '../../components/Cart'
//TYPES
import { CartItemProps } from '../../@types/Cart'
import { IProduct } from '../../@types/Product'


export function Home() {
  const [selectedTable, setSelectedTable] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [cartItem, setCartItem] = useState<CartItemProps[]>([])

  function handleSavedTable(table: string) {
    setSelectedTable(table)
  }
  function handleCancelOrder() {
    setSelectedTable(null)
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

  return (
    <>
      <Container>
        <Header selectedTable={selectedTable} cancelOrder={handleCancelOrder}/>
        <Categories />
        <Menu onAddToCart={handleAddToCart}/>
      </Container>

      <Footer>
        {!selectedTable && (
          <Button onPress={() => setIsModalOpen(true)} title='Novo Pedido'/>
        )}
        {selectedTable && (
          <Cart cartItem={cartItem}/>
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
