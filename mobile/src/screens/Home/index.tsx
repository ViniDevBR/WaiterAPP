//REACT
import { useState } from 'react'
//COMPONENTS
import { Header } from '../../components/Header'
import { Categories } from '../../components/Categories'
import { Menu } from '../../components/Menu'
import { Footer } from '../../components/Footer'
import { Container } from './styles'
import { Modal } from '../../components/Modal'


export function Home() {
  const [selectedTable, setSelectedTable] = useState<string>('')
  const[isModalOpen, setIsModalOpen] = useState<boolean>(false)

  function handleSavedTable(table: string) {
    setSelectedTable(table)
  }

  return (
    <>
      <Container>
        <Header />
        <Categories />
        <Menu />
      </Container>

      {!selectedTable && (
        <Footer onOpen={() => setIsModalOpen(true)}/>
      )}

      <Modal
        visible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSavedTable}
      />
    </>
  )
}
