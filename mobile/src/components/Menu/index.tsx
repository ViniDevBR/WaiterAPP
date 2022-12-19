import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { products } from '../../mocks/products'
import { Text } from '../Text'
import { MenuContainer, Product, ProductDetails, Image, Separator, AddCartButton } from './styles'
import { formatCoin } from '../../utils/formatCoin'
import { PlusCircle } from '../Icons/PlusCircle'
import { ProductModal } from '../ProductModal'
import { IProduct } from '../../@types/Product'



export function Menu() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null)

  function handleMenuOpen(product: IProduct) {
    setIsModalVisible(true)
    setSelectedProduct(product)
  }

  return (
    <MenuContainer>
      <FlatList
        data={products}
        contentContainerStyle={{paddingHorizontal: 24}}
        ItemSeparatorComponent={Separator}
        style={{marginTop: 32}}
        keyExtractor={product => product._id}
        renderItem={({item: product}) => {

          return(
            <Product onPress={() => handleMenuOpen(product)}>
              <Image
                source={{uri: `http://192.168.0.4:4444/uploads/${product.imagePath}` }}
                defaultSource={{uri: `http://192.168.0.4:4444/uploads/${product.imagePath}`}}
              />

              <ProductDetails>
                <Text weight='600'>{product.name}</Text>
                <Text size={14} color='#666' style={{marginVertical: 8}}>
                  {product.description}
                </Text>
                <Text size={14} color='#333' weight='600'>{formatCoin(product.price)}</Text>
              </ProductDetails>

              <AddCartButton>
                <PlusCircle />
              </AddCartButton>
            </Product>
          )}}
      />

      <ProductModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        product={selectedProduct}
      />
    </MenuContainer>
  )
}
