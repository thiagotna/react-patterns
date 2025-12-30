import { useState } from 'react'
import { createContextFactory } from '../createContextFactory/createContextFactory'
import { ModalContextType } from './types'

/**
 * Modal context factory that provides modal state management.
 *
 * @typedef {Object} ModalContextType
 * @property {boolean} isOpen - Indicates whether the modal is currently open
 * @property {() => void} toggleModal - Function to toggle the modal open/closed state
 *
 * @example
 * // Usage in component tree
 * <ModalProvider>
 *   <YourComponent />
 * </ModalProvider>
 *
 * // Usage in components
 * const { isOpen, toggleModal } = useModal()
 */
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
