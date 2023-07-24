import AddressInput from "./components/Address/AddressInput"
import Table from "./components/Table/Table";
import { Box } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';

import { theme } from "./utils/theme";
import { useWebSocketHook } from "./utils";

function App() {
  const { isPaused } = useWebSocketHook();
  console.log(isPaused);
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100vw", display: "flex", justifyContent: 'center', }}>
        <Box>
          <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 5 }}>
            <AddressInput />
          </Box>
          <Table />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
