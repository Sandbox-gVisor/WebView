import { Box } from "@mui/material";
import Filter from "@/components/Filter/Filter";
import Paginator from "@/components/Page/Paginator";

export default function Sidebar() {
  return (
    <Box sx={{ minWidth: 150, marginTop: 4 }}>
      <Box sx={{ marginLeft: "10%" }}>
        <Filter />
        <Paginator />
      </Box>
    </Box>
  );
}
