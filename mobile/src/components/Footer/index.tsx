import { Button } from '../Button'
import { FooterContainer, FooterDetails } from './styles'


interface Props {
  onOpen: VoidFunction
}

export function Footer(props: Props) {
  return (
    <FooterContainer>
      <FooterDetails>
        <Button onPress={props.onOpen} title='Novo Pedido'/>
      </FooterDetails>
    </FooterContainer>
  )
}
