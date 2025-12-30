import { SplitScreen } from './components/shared/SplitScreen/SplitScreen'
import { Modal } from './components/shared/Modal/Modal'

function App() {
  return (
    <>
      <SplitScreen leftWeight="flex-1" rightWeight="flex-1">
        <h2>Left Component</h2>
        <h2>Right Component</h2>
      </SplitScreen>
      <Modal isOpen={false} toggleModal={() => alert('Toggle Modal')}>
        <p>This is the modal content.</p>
      </Modal>
    </>
  )
}

export default App
