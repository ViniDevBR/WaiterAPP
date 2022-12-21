//REACT
import { Modal } from 'react-native'
import { StatusBar } from 'expo-status-bar'
//COMPONENTS
import { CheckCircle } from '../Icons/CheckCircle'
import { Text } from '../Text'
//STYLED
import { Container, OkButton } from './styles'


interface Props {
  visible: boolean
  onCloseModal: VoidFunction
}

export function OrderConfirmed(props: Props) {
  return (
    <Modal
      visible={props.visible}
      animationType='fade'
    >
      <StatusBar animated style="light" backgroundColor="#d73035" />
      <Container>
        <CheckCircle />
        <Text
          weight='600'
          color='#fff'
          size={20}
          style={{marginTop: 12, marginBottom: 4}}
        >
          Pedido confirmado
        </Text>
        <Text color='#fff' opacity={0.9}>O pedido ja entrou na fila de produção</Text>

        <OkButton onPress={props.onCloseModal}>
          <Text weight='600' color='#D73035'>OK</Text>
        </OkButton>
      </Container>
    </Modal>
  )
}