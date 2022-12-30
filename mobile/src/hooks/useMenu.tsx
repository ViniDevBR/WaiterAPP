import { useContext } from 'react'
import { MenuContext } from '../context/Menu'

export function useMenu() {
  const context = useContext(MenuContext)

  return context
}
