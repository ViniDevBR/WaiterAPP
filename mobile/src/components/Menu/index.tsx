import React from 'react'
import { FlatList } from 'react-native'
import { products } from '../../mocks/products'
import { Text } from '../Text'
import { MenuContainer, Product, ProductDetails, Image } from './styles'

export function Menu() {
  return (
    <MenuContainer>
      <FlatList
        data={products}
        contentContainerStyle={{paddingHorizontal: 24}}
        style={{marginTop: 32}}
        keyExtractor={product => product._id}
        renderItem={({item: product}) => {

          return(
            <Product>
              <Image
                source={{uri: `http://localhost:4444/uploads/${product.imagePath}` }}
              />

              <ProductDetails>
                <Text>{product.name}</Text>
                <Text>{product.description}</Text>
                <Text>{product.price}</Text>
              </ProductDetails>
            </Product>
          )}}
      />
    </MenuContainer>
  )
}
