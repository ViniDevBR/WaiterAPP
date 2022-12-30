//REACT
import { useState } from 'react'
import { ActivityIndicator } from 'react-native'
//COMPONENTS
import { Header } from '../../components/Header'
import { Categories } from '../../components/Categories'
import { Menu } from '../../components/Menu'
import { Footer } from '../../components/Footer'
import { ModalTable } from '../../components/ModalTable'
import { Button } from '../../components/Button'
import { Cart } from '../../components/Cart'
import { Text } from '../../components/Text'
import { Empty } from '../../components/Icons/Empty'
//STYLED
import { Container, CenteredContainer } from './styles'
//TYPES
import { CartItemProps } from '../../@types/Cart'
import { IProduct } from '../../@types/Product'
//BACK END
import { API } from '../../services/api'
//HOOKS
import { useMenu } from '../../hooks/useMenu'



export function Home() {
  const [selectedTable, setSelectedTable] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [cartItem, setCartItem] = useState<CartItemProps[]>([])
  const [isLoadingProducts, setIsLoadingProducts] = useState<boolean>(false)

  const { isLoading, products, setProducts } = useMenu()

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


  async function handleSelectedCategory(categoryId: string) {
    const route = categoryId === '' ? '/products' : `/categories/${categoryId}/products`

    setIsLoadingProducts(true)

    const { data } = await API.get(route)
    setProducts(data)
    setIsLoadingProducts(false)
  }

  return (
    <>
      <Container>
        <Header selectedTable={selectedTable} cancelOrder={handleResetOrder}/>

        {isLoading ? (
          <CenteredContainer>
            <ActivityIndicator size='large' color='#d73035'/>
          </CenteredContainer>
        ):(
          <>
            <Categories onSelectCategory={handleSelectedCategory}/>
            {isLoadingProducts ? (
              <CenteredContainer>
                <ActivityIndicator size='large' color='#d73035'/>
              </CenteredContainer>
            ) : (
              <>
                {products.length > 0 ? (
                  <Menu onAddToCart={handleAddToCart}/>
                ) : (
                  <CenteredContainer>
                    <Empty />
                    <Text color='#666' style={{marginTop: 24}}>Nenhum produto foi encontrado!</Text>
                  </CenteredContainer>
                )}
              </>
            )}
          </>
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
            selectedTable={selectedTable}
            cartItem={cartItem}
            onAdd={handleAddToCart}
            onRemove={handleDecrementToCart}
            onConfirmedOrder={handleResetOrder}
          />
        )}
      </Footer>


      <ModalTable
        visible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSavedTable}
      />
    </>
  )
}
