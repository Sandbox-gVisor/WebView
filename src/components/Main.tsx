import { Box } from "@mui/material";

import Sidebar from "./Sidebar/Sidebar";
import Table from "./Table/Table";
import Pagginator from "./Page/Pagginator";

export default function Main() {
  return (
    <Box sx={{ height: "100vh", display: "flex" }}>
      <Sidebar />
      <Box sx={{
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        padding: 4
      }}>
        <Table />
        <Pagginator />
      </Box>
    </Box>
  )
}
