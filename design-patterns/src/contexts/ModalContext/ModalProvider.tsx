import { useState } from 'react'
import { ModalContext } from './ModalContext'

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
