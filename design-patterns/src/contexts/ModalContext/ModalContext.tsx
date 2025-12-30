import { useState } from 'react'
import { createContextFactory } from '../createContextFactory/createContextFactory'
import { ModalContextType } from './types'

export const { Provider: ModalProvider, useContext: useModal } =
  createContextFactory<ModalContextType>('ModalContext', () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleModal = () => {
      setIsOpen((prev) => !prev)
    }

    return {
      isOpen,
      toggleModal,
    }
  })
