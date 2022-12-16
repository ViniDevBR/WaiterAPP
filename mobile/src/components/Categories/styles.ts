import styled from 'styled-components/native'
import { Platform } from 'react-native'

const isAndroid = Platform.OS === 'android'


export const CategorieContainer = styled.View`
  height: 73px;
  margin-top: 34px;
  flex-direction: row;
`

export const Icon = styled.View`
  width: 44px;
  height: 44px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 22px;
  margin-bottom: 8px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, ${isAndroid ? 1: 0.1});
  elevation: 2;
`

export const Category = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-right: 24px;
`