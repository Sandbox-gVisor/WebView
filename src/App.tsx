import AddressInput from "./components/Address/AddressInput"
import { useWebSocketHook } from "./utils"
import Table from "./components/Table/Table";
import { Box } from "@mui/material";

function App() {
  const { logs } = useWebSocketHook();
  return (
    <Box sx={{ width: "100vw", display: "flex", justifyContent: 'center', }}>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 5 }}>
          <AddressInput />
        </Box>
        <Table />
      </Box>
    </Box>
  )
}

export default App
