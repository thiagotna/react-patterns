import { ModalProps } from './types'

/**
 * Modal component that displays a centered dialog overlay with header, body, and footer sections.
 *
 * @component
 * @param {ModalProps} props - The component props
 * @param {boolean} props.isOpen - Controls visibility of the modal
 * @param {() => void} props.toggleModal - Callback function to toggle modal open/close state
 * @param {React.ReactNode} props.children - Content to be rendered in the modal body
 *
 * @returns {React.ReactElement} A modal overlay with a white container including header, body, and footer
 *
 * @example
 * const [isOpen, setIsOpen] = useState(false);
 * const toggleModal = () => setIsOpen(!isOpen);
 *
 * return (
 *   <Modal isOpen={isOpen} toggleModal={toggleModal}>
 *     <p>Modal content goes here</p>
 *   </Modal>
 * );
 */
export const Modal = ({ isOpen, toggleModal, children }: ModalProps) => {
  return (
    <>
      {isOpen && (
        // MODAL OVERLAY
        <div
          className="fixed w-screen h-screen inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={toggleModal}
        >
          {/* MODAL CONTAINER */}
          <div className="bg-white rounded-lg shadow-lg w-10/12 md:w-1/2">
            {/* MODAL HEADER */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold">Modal Title</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={toggleModal}
              >
                Close
              </button>
            </div>
            {/* MODAL BODY */}
            <div className="" onClick={(e) => e.stopPropagation()}>
              {children}
            </div>
            {/* MODAL FOOTER */}
            <div className="">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg m-4"
                onClick={toggleModal}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
