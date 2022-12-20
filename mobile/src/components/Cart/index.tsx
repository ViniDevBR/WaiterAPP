//REACT
import { FlatList, TouchableOpacity } from 'react-native'
//STYLED
import { ContainerItem, ProductCart, Actions, Image, Quantity, ProductDetails, Sumary, TotalContainer, TotalValue } from './styles'
//TYPES
import { CartItemProps } from  '../../@types/Cart'
import { Text } from '../Text'
import { formatCoin } from '../../utils/formatCoin'
import { PlusCircle } from '../Icons/PlusCircle'
import { MinusCircle } from '../Icons/MinusCircle'
import { Button } from '../Button'


interface CartProps {
  cartItem: CartItemProps[]
}

export function Cart({ cartItem }: CartProps) {

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
                    source={{uri :`http://172.9.9.3:4444/uploads/${product.product.imagePath}`}}
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
                  <TouchableOpacity style={{paddingHorizontal: 10}}>
                    <PlusCircle />
                  </TouchableOpacity>
                  <TouchableOpacity style={{paddingHorizontal: 10}}>
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
              <Text size={20} weight='600'>{formatCoin(200)}</Text>
            </>
          ) : (
            <Text color='#999'>Seu carrinho esta vazio!</Text>
          )}
        </TotalContainer>

        <Button disabled={cartItem.length === 0} title='Confirmar Pedido'/>
      </Sumary>
    </>
  )
}