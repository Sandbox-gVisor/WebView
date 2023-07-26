import { Box } from "@mui/material";
import AddressInput from "../Address/AddressInput";

export default function Sidebar() {
  return (
    <Box sx={{ minWidth: 300 }}>
      <AddressInput />
    </Box>
  );
}
