//REACT
import {
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useState,
  useEffect
} from 'react'
//TYPES
import { IProduct } from '../@types/Product'
import { CategoriesItem } from '../@types/Category'
//BACK END
import { API } from '../services/api'

interface IMenuContext {
  products: IProduct[]
  setProducts: Dispatch<SetStateAction<IProduct[]>>
  isLoading: boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
  categories: CategoriesItem[]
  setCategories: Dispatch<SetStateAction<CategoriesItem[]>>
}

interface IMenuContextProvider {
  children: ReactNode
}

export const MenuContext = createContext<IMenuContext>({} as IMenuContext)

export function MenuContextProvider({ children }: IMenuContextProvider) {
  const [products, setProducts] = useState<IProduct[]>([])
  const [categories, setCategories] = useState<CategoriesItem[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const values = {
    products,
    setProducts,
    categories,
    setCategories,
    isLoading,
    setIsLoading
  }

  useEffect(() => {
    try {
      Promise.all([
        API.get('/products'),
        API.get('/categories')])
        .then(
          ([productResponse, categoriesResponse]) => {
            setCategories(categoriesResponse.data)
            setProducts(productResponse.data)
            setIsLoading(false)
          }
        )

    } catch (error) {
      console.log(error)

    } finally {
      setIsLoading(false)
    }
  }, [])

  return (
    <MenuContext.Provider value={values}>
      {children}
    </MenuContext.Provider>
  )
}
