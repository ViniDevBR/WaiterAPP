//REACT
import { FlatList, Modal } from 'react-native'
//TYPES
import { IProduct } from '../../@types/Product'
//UTILS
import { formatCoin } from '../../utils/formatCoin'
//COMPONENTS
import { Button } from '../Button'
import { Close } from '../Icons/Close'
import { Empty } from '../Icons/Empty'
import { Text } from '../Text'
//STYLED
import { Image, CloseButton, Header, ModalBody, Ingredients, IngredientDetails, FooterContainer, FooterDetails, Price } from './styles'


interface Props {
  visible: boolean
  onClose: VoidFunction
  product: IProduct
  onAddToCart: (product: IProduct) => void
}

export function ProductModal({ product, onAddToCart, ...props}: Props) {
  if(!product) {
    return null
  }

  function handleAddProduct() {
    onAddToCart(product!)
    props.onClose()
  }

  return (
    <Modal
      visible={props.visible}
      animationType='slide'
      presentationStyle='pageSheet'
      onRequestClose={props.onClose}
    >
      <Image
        source={{uri :`http://172.9.9.5:4444/uploads/${product.imagePath}`}}
      >
        <CloseButton onPress={props.onClose}>
          <Close />
        </CloseButton>
      </Image>

      <ModalBody>
        <Header>
          <Text size={24} weight='600'>{product?.name}</Text>
          <Text color='#666' style={{marginTop: 8}}>{product?.description}</Text>
        </Header>

        <Ingredients>
          <Text weight='600' color='#666'>Ingredientes</Text>

          <FlatList
            data={product?.ingredients}
            keyExtractor={ingredient => ingredient._id}
            ListEmptyComponent={() => {
              return (
                <>
                  <Empty />
                  <Text color='#666'>Nenhum ingrediente foi encontrado!</Text>
                </>
              )
            }}
            showsVerticalScrollIndicator={false}
            style={{marginTop: 16}}
            contentContainerStyle={{paddingBottom: 30}}
            renderItem={({item: product}) => {
              return(
                <IngredientDetails>
                  <Text style={{marginRight: 20}}>{product.icon}</Text>
                  <Text size={14} color='#666'>{product.name}</Text>
                </IngredientDetails>
              )}}
          />
        </Ingredients>
      </ModalBody>

      <FooterContainer>
        <FooterDetails>
          <Price>
            <Text color='#666'>Preço</Text>
            <Text size={20} weight='600'>
              {formatCoin(product.price)}
            </Text>
          </Price>

          <Button onPress={handleAddProduct} title='Adicionar ao pedido'/>
        </FooterDetails>
      </FooterContainer>
    </Modal>
  )
}