import { TouchableOpacityProps } from 'react-native'
import { Text } from '../Text'
import { Container } from './styles'

interface Props extends TouchableOpacityProps{
  title: string
}

export function Button({ title, ...props }: Props) {
  return (
    <Container {...props}>
      <Text weight='600' color='#fff'>{title}</Text>
    </Container>
  )
}