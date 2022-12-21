import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #fafafa;
`

export const CenteredContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`