import { Box } from "@mui/material";

import Sidebar from "./Sidebar/Sidebar";
import Table from "./Table/Table";
import AppBar from "./Sidebar/AppBar";

export default function Main() {
  return (
    <Box sx={{ width: "100vw", maxHeight: "100vh", minHeight: "100vh" }}>
      <AppBar />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box sx={{
          display: "flex", flexDirection: "column",
          justifyContent: "space-between", padding: 4,
        }}>
          <Table />
        </Box>
      </Box>
    </Box>
  )
}
