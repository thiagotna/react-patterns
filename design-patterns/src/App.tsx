import { SplitScreen } from './components/shared/SplitScreen/SplitScreen'
import { ModalCoumpound } from './components/ModalCoumpound/ModalCoumpound'
import { ModalProvider } from './contexts/ModalContext/ModalContext'

function App() {
  return (
    <>
      <SplitScreen leftWeight="flex-1" rightWeight="flex-1">
        <h2>Left Component</h2>
        <h2>Right Component</h2>
      </SplitScreen>
      <ModalProvider>
        <ModalCoumpound />
      </ModalProvider>
    </>
  )
}

export default App
