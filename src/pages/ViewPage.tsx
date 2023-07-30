import {Box} from "@mui/material";
import AppBar from "@/components/Sidebar/AppBar";
import Sidebar from "@/components/Sidebar/Sidebar";
import Table from "@/components/Table/Table";

export default function ViewPage() {
  return (
    <>
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
    </>
  );
}