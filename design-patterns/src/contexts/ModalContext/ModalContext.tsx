import { createContext } from 'react'

interface ModalContextType {
  isOpen: boolean
  togglenModal: () => void
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined,
)
