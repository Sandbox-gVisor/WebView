import { ThemeProvider } from '@mui/material/styles';

import { useWebSocketHook, theme } from "./utils";
import Main from "./components/Main";

function App() {
  const { isPaused } = useWebSocketHook();
  console.log(isPaused);
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  )
}

export default App
