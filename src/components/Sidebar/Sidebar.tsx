import { Box } from "@mui/material";
import Filter from "../Filter/Filter";

export default function Sidebar() {
  return (
    <Box sx={{ minWidth: 150, marginTop: '5%', }}>
      <Filter />
    </Box>
  );
}
