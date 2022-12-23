//REACT
import { TouchableOpacity } from 'react-native'
//COMPONENTS
import { Text } from '../Text'
import { Container, ContentHeader, TitleHeader, TableNumber } from './styles'


interface Props {
  selectedTable: string | null
  cancelOrder: VoidFunction
}

export function Header(props: Props) {
  return (
    <Container>
      {props.selectedTable &&
        <ContentHeader>
          <TitleHeader>
            <Text size={24} weight='600'>Pedido</Text>
            <TouchableOpacity onPress={props.cancelOrder}>
              <Text color='#D73035' weight='600' size={14}>Cancelar Pedido</Text>
            </TouchableOpacity>
          </TitleHeader>

          <TableNumber>
            <Text color='#666'>Mesa {props.selectedTable}</Text>
          </TableNumber>
        </ContentHeader>
      }

      {!props.selectedTable &&
        <>
          <Text size={14} opacity={0.9}>
            Bem vindo(a) ao
          </Text>
          <Text size={24} weight="700">
            WAITER<Text size={24}>APP</Text>
          </Text>
        </>
      }
    </Container>
  )
}
