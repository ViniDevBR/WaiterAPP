import { FlatList, Modal } from 'react-native'
import { IProduct } from '../../@types/Product'
import { formatCoin } from '../../utils/formatCoin'
import { Button } from '../Button'
import { Close } from '../Icons/Close'
import { Empty } from '../Icons/Empty'
import { Text } from '../Text'
import { Image, CloseButton, Header, ModalBody, Ingredients, IngredientDetails, FooterContainer, FooterDetails, Price } from './styles'


interface Props {
  visible: boolean
  onClose: VoidFunction
  product: IProduct | null
}

export function ProductModal({ product, ...props}: Props) {
  if(!product) {
    return null
  }

  return (
    <Modal
      visible={props.visible}
      animationType='slide'
      presentationStyle='pageSheet'
      onRequestClose={props.onClose}
    >
      <Image
        source={{uri :`http://192.168.0.4:4444/uploads/${product?.imagePath}`}}
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
            ListEmptyComponent={<Empty />}
            showsVerticalScrollIndicator={false}
            style={{marginTop: 16}}
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

          <Button title='Adicionar ao pedido'/>
        </FooterDetails>
      </FooterContainer>
    </Modal>
  )
}