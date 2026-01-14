import { Button } from '../../shared/Button/Button'
import { useModal } from '../../../contexts/ModalContext/ModalContext'

export const ModalButton = () => {
  const { toggleModal } = useModal()

  return <Button onClick={toggleModal}>Open Modal</Button>
}
