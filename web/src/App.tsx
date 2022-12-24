import { Header } from './components/Header'
import { Orders } from './components/Orders'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function App() {
  return (
    <>
      <ToastContainer position='bottom-center'/>
      <Header />
      <Orders />
    </>
  )
}
