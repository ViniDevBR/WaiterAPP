//REACT
import { FlatList, TouchableOpacity } from 'react-native'
import { useState } from 'react'
//STYLED
import { ContainerItem, ProductCart, Actions, Image, Quantity, ProductDetails, Sumary, TotalContainer } from './styles'
//TYPES
import { CartItemProps } from  '../../@types/Cart'
import { IProduct } from '../../@types/Product'
//COMPONENTS
import { Text } from '../Text'
import { PlusCircle } from '../Icons/PlusCircle'
import { MinusCircle } from '../Icons/MinusCircle'
import { Button } from '../Button'
import { OrderConfirmed } from '../OrderConfirmed'
//UTILS
import { formatCoin } from '../../utils/formatCoin'
//BACK END
import { API, globalUrl } from '../../services/api'


interface CartProps {
  cartItem: CartItemProps[]
  onAdd: (product: IProduct) => void
  onRemove: (product: IProduct) => void
  onConfirmedOrder: VoidFunction
  selectedTable: string
}

export function Cart({ cartItem, onAdd, onRemove, onConfirmedOrder, selectedTable }: CartProps) {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [isLoadingCart, setIsLoadingCart] = useState<boolean>(false)

  const totalPrice = cartItem.reduce((acc, cartItem) => {
    return acc + cartItem.quantity * cartItem.product.price
  }, 0)

  async function handleOrderConfirmed() {
    setIsLoadingCart(true)
    const infos = {
      table: selectedTable,
      products: cartItem.map(cartItem => ({
        product: cartItem.product._id,
        quantity: cartItem.quantity
      }))
    }

    await API.post('/orders', infos)
    setIsModalVisible(true)
    setIsLoadingCart(false)
  }
  function handleOkConfirm() {
    setIsModalVisible(false)
    onConfirmedOrder()
  }

  return (
    <>
      {cartItem.length > 0 && (
        <FlatList
          data={cartItem}
          keyExtractor={item => item.product._id}
          style={{marginBottom: 20, maxHeight: 80}}
          renderItem={({item: product}) => {
            return(
              <ContainerItem>
                <ProductCart>
                  <Image
                    source={{uri :`${globalUrl}/uploads/${product.product.imagePath}`}}
                  />
                  <Quantity>
                    <Text size={14} color='#666'>
                      {product.quantity}
                    </Text>
                  </Quantity>
                  <ProductDetails>
                    <Text size={14} weight='600'>{product.product.name}</Text>
                    <Text size={14} color='#666' style={{marginTop: 4}}>
                      {formatCoin(product.product.price)}
                    </Text>
                  </ProductDetails>
                </ProductCart>

                <Actions>
                  <TouchableOpacity
                    style={{paddingHorizontal: 10}}
                    onPress={() => onAdd(product.product)}
                  >
                    <PlusCircle />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{paddingHorizontal: 10}}
                    onPress={() => onRemove(product.product)}
                  >
                    <MinusCircle />
                  </TouchableOpacity>
                </Actions>
              </ContainerItem>
            )}}
        />
      )}

      <Sumary>
        <TotalContainer>
          {cartItem.length > 0 ? (
            <>
              <Text color='#666'>Total</Text>
              <Text size={20} weight='600'>{formatCoin(totalPrice)}</Text>
            </>
          ) : (
            <Text color='#999'>Seu carrinho esta vazio!</Text>
          )}
        </TotalContainer>

        <Button
          disabled={cartItem.length === 0}
          title='Confirmar Pedido'
          onPress={handleOrderConfirmed}
          isLoading={isLoadingCart}
        />
      </Sumary>

      <OrderConfirmed onCloseModal={handleOkConfirm} visible={isModalVisible}/>
    </>
  )
}