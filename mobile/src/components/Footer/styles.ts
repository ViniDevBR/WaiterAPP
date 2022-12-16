import styled from 'styled-components/native'
import { Platform } from 'react-native'

const isAndroid = Platform.OS === 'android'

export const FooterContainer = styled.SafeAreaView``

export const FooterDetails = styled.View`
  background-color: #fff;
  min-height: 110px;
  padding: ${isAndroid? 30 : 16}px 24px;
`
