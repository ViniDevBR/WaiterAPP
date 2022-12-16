import { Header } from '../../components/Header'
import { Categories } from '../../components/Categories'
import { Menu } from '../../components/Menu'
import { Footer } from '../../components/Footer'
import { Container } from './styles'

export function Home() {
  return (
    <>
      <Container>
        <Header />
        <Categories />
        <Menu />
      </Container>

      <Footer />
    </>
  )
}
