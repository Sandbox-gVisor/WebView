import {Box} from "@mui/material";
import {FilterComponent as Filter} from "@/components/Filter/Filter";
import {PaginatorComponent as Paginator} from "@/components/Page/Paginator";

export default function Sidebar() {
  return (
    <Box sx={{minWidth: 150, marginTop: 4}}>
      <Box sx={{marginLeft: "10%"}}>
        <Filter/>
        <Paginator/>
      </Box>
    </Box>
  );
}
