import { ActivityIndicator, TouchableOpacityProps } from 'react-native'
import { Text } from '../Text'
import { Container } from './styles'

interface Props extends TouchableOpacityProps{
  title: string
  isLoading?: boolean
}

export function Button({ title, isLoading=false, ...props }: Props) {
  return (
    <Container {...props} disabled={isLoading}>
      {isLoading ?
        <ActivityIndicator color='#fff'/>
        :
        <Text weight='600' color='#fff'>{title}</Text>
      }
    </Container>
  )
}