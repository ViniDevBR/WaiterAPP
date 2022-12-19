import styled from 'styled-components/native'
import { Platform } from 'react-native'

export const Image = styled.ImageBackground`
  width: 100%;
  height: 200px;
`

export const CloseButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 14px;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: 24px;
  top: 24px;
`

export const Header = styled.View``

export const ModalBody = styled.View`
  flex: 1;
  background-color: #fafafa;
  padding: 32px 24px 0;
`

export const Ingredients = styled.View`
  margin-top: 32px;
  flex: 1;
`

export const IngredientDetails = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px;
  border: 1px solid rgba(204, 204, 204, 0.3);
  border-radius: 8px;
  margin-bottom: 4px;
`

const isAndroid = Platform.OS === 'android'

export const FooterContainer = styled.SafeAreaView``

export const FooterDetails = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  min-height: 110px;
  padding: ${isAndroid? 30 : 16}px 24px;
`

export const Price = styled.View``