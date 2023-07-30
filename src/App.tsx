import { ThemeProvider } from '@mui/material/styles';

import { theme } from "./utils/theme";
import { useWebSocketHook } from "./utils";
import Main from "./components/Main";

function App() {
  const { isPaused } = useWebSocketHook();
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  )
}

export default App
