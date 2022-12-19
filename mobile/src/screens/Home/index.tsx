//REACT
import { useState } from 'react'
//COMPONENTS
import { Header } from '../../components/Header'
import { Categories } from '../../components/Categories'
import { Menu } from '../../components/Menu'
import { Footer } from '../../components/Footer'
import { Container } from './styles'
import { Modal } from '../../components/Modal'
import { CartItemProps } from '../../@types/Cart'
import { Button } from '../../components/Button'
import { Cart } from '../../components/Cart'


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

  return (
    <>
      <Container>
        <Header selectedTable={selectedTable} cancelOrder={handleCancelOrder}/>
        <Categories />
        <Menu />
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
