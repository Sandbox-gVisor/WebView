import AddressInput from "./components/Address/AddressInput"
import { useWebSocketHook } from "./utils"

function App() {
  const { } = useWebSocketHook();
  return (
    <>
      <AddressInput />
    </>
  )
}

export default App
