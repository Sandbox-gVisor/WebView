import { Box } from "@mui/material";
import Filter from "../Filter/Filter";

export default function Sidebar() {
  return (
    <Box sx={{ minWidth: 150, marginTop: 4 }}>
      <Box sx={{ marginLeft: "10%" }}>
        <Filter />
      </Box>
    </Box>
  );
}
