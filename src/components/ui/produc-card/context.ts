import { createContext, useContext } from 'react'
import { Product } from '../../../redux/type'

export const CardContext = createContext<Product | undefined>(undefined)

export const useCardContext = () => {
  const context = useContext(CardContext)
  if (!context) {
    throw new Error('error')
  }
  return context
}
