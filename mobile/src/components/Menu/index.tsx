import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { products } from '../../mocks/products'
import { Text } from '../Text'
import { MenuContainer, Product, ProductDetails, Image, Separator, AddCartButton } from './styles'
import { formatCoin } from '../../utils/formatCoin'
import { PlusCircle } from '../Icons/PlusCircle'
import { ProductModal } from '../ProductModal'
import { IProduct } from '../../@types/Product'


interface Props {
  onAddToCart: (product: IProduct) => void
}

export function Menu({ onAddToCart }: Props) {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null)

  function handleMenuOpen(product: IProduct) {
    setIsModalVisible(true)
    setSelectedProduct(product)
  }
  //192.168.0.4
  //172.9.9.3

  return (
    <MenuContainer>
      <FlatList
        data={products}
        contentContainerStyle={{paddingHorizontal: 24, paddingBottom: 30}}
        ItemSeparatorComponent={Separator}
        style={{marginTop: 32}}
        keyExtractor={product => product._id}
        renderItem={({item: product}) => {

          return(
            <Product onPress={() => handleMenuOpen(product)}>
              <Image
                source={{uri: `http://172.9.9.3:4444/uploads/${product.imagePath}` }}
                defaultSource={{uri: `http://172.9.9.3:4444/uploads/${product.imagePath}`}}
              />

              <ProductDetails>
                <Text weight='600'>{product.name}</Text>
                <Text size={14} color='#666' style={{marginVertical: 8}}>
                  {product.description}
                </Text>
                <Text size={14} color='#333' weight='600'>{formatCoin(product.price)}</Text>
              </ProductDetails>

              <AddCartButton onPress={() => onAddToCart(product)}>
                <PlusCircle />
              </AddCartButton>
            </Product>
          )}}
      />

      <ProductModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        product={selectedProduct}
        onAddToCart={onAddToCart}
      />
    </MenuContainer>
  )
}
