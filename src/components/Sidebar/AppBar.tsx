import {
  AppBar, Box, Typography
} from "@mui/material";
import AddressInput from "../Address/AddressInput";

export default function HeaderBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Box sx={{ display: "flex", justifyContent: 'space-between', }}>
          <Box sx={{
            padding: 3, display: "flex", alignItems: "center",
          }} >
            <img src="/logo.png" width="48" height="48" />
            <div className="Logo" style={{ marginLeft: 20 }}>
              gWisord
            </div>
          </Box>
          <AddressInput />
        </Box>
      </AppBar>
    </Box>
  );
}
