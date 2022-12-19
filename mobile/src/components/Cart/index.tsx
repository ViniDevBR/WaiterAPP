import { FlatList } from 'react-native'
import { Container } from './styles'
import { CartItemProps } from  '../../@types/Cart'


interface CartProps {
  cartItem: CartItemProps[]
}

export function Cart({ cartItem }: CartProps) {
  return (
    <FlatList
      data={cartItem}
      keyExtractor={item => item.product._id}
      renderItem={({item: product}) => {return(
        null
      )}}
    />
  )
}