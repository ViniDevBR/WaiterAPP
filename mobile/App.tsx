import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Home } from './src/screens/Home'
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

export default function App() {
  const [fontsLoaded] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf')
  })

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" animated />
      {fontsLoaded ? <Home /> : null}
    </SafeAreaProvider>
  )
}
