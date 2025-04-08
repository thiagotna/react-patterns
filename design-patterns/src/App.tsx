import { SplitScreen } from './components/SplitScreen/SplitScreen'

function App() {
  return (
    <SplitScreen leftWeight="flex-1" rightWeight="flex-1">
      <h2>Left Component</h2>
      <h2>Right Component</h2>
    </SplitScreen>
  )
}

export default App
