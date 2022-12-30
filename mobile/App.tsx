/* eslint-disable @typescript-eslint/no-unused-vars */
//EXPO
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
//REACT NATIVE
import { SafeAreaProvider } from 'react-native-safe-area-context'
//SCREENS
import { Home } from './src/screens/Home'
//INTL
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
//CONTEXT
import { MenuContextProvider } from './src/context/Menu'
//STYLED COMPONENTS
import { useTheme } from 'styled-components'

export default function App() {
  const [fontsLoaded] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf')
  })

  return (
    <SafeAreaProvider>
      <MenuContextProvider>
        <StatusBar style='dark' animated />
        {fontsLoaded ? <Home /> : null}
      </MenuContextProvider>
    </SafeAreaProvider>
  )
}
