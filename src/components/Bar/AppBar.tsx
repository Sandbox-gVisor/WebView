import React from "react";
import {
  AppBar, Box
} from "@mui/material";
import AddressInput from "@/components/Address/AddressInput";

function HeaderBar() {
  return (
    <AppBar position="static" color="default">
      <Box sx={{display: "flex", justifyContent: 'space-between',}}>
        <Box sx={{
          padding: 3, display: "flex", alignItems: "center",
        }}>
          <img src="/logo.png" width="48" height="48"/>
          <div className="Logo" style={{marginLeft: 20}}>
            gWisord
          </div>
        </Box>
        <Box sx={{display: "flex"}}>
          {/*
          <Button sx={{color: "#202020"}} onClick={handleClick}>
            switch to {page === "view" ? "edit" : "view"} page
          </Button>
          */}
          <AddressInput/>
        </Box>
      </Box>
    </AppBar>
  );
}

export const MemoizedAppBar = React.memo(HeaderBar);
