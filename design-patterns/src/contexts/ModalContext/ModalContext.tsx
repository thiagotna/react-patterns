import { createContext, useContext, useState } from 'react'

interface ModalContextType {
  isOpen: boolean
  togglenModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)
export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const togglenModal = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <ModalContext.Provider value={{ isOpen, togglenModal }}>
      {children}
    </ModalContext.Provider>
  )
}
export const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}
