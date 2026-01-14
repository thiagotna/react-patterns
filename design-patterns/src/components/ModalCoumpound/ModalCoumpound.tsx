import { useModal } from '../../contexts/ModalContext/ModalContext'
import { Modal } from '../shared/Modal/Modal'
import { ModalButton } from './ModalButton/ModalButton'

export const ModalCoumpound = () => {
  const { isOpen, toggleModal } = useModal()

  return (
    <>
      <Modal
        isOpen={isOpen}
        toggleModal={toggleModal}
        children={`This is the modal coumpound example with a context factory e coumpound design pattern.`}
      />
      <ModalButton />
    </>
  )
}
