//REACT
import { ActivityIndicator, TouchableOpacityProps } from 'react-native'
//COMPONENTS
import { Text } from '../Text'
import { Container } from './styles'

interface Props extends TouchableOpacityProps{
  title: string
  isLoading?: boolean
  disabled?: boolean
}

export function Button({ title, isLoading, disabled,  ...props }: Props) {
  return (
    <Container {...props} disabled={isLoading || disabled}>
      {isLoading ?
        <ActivityIndicator color='#fff'/>
        :
        <Text weight='600' color='#fff'>{title}</Text>
      }
    </Container>
  )
}