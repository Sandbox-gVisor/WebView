import { Box } from "@mui/material";

import Sidebar from "./Sidebar/Sidebar";
import Table from "./Table/Table";
import Pagginator from "./Page/Pagginator";
import AppBar from "./Sidebar/AppBar";

export default function Main() {
  return (
    <Box sx={{ width: "100vw", height: "100vh" }}>
      <AppBar />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box sx={{
          display: "flex", flexDirection: "column",
          justifyContent: "space-between", padding: 4
        }}>

          <Box sx={{ height: "max-content" }}>
            <Table />
          </Box>
          <Pagginator />
        </Box>
      </Box>
    </Box>
  )
}
