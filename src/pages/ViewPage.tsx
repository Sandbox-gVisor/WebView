import {Box} from "@mui/material";
import Sidebar from "@/components/Bar/Sidebar";
import Table from "@/components/Table/Table";

export default function ViewPage() {
  return (
    <Box sx={{display: "flex"}}>
      <Sidebar/>
      <Box sx={{
        display: "flex", flexDirection: "column",
        justifyContent: "space-between", padding: 4,
      }}>
        <Table/>
      </Box>
    </Box>
  );
}