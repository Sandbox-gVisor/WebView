import {
  FormControl, OutlinedInput, InputLabel, InputAdornment,
  Alert, Box,
} from "@mui/material";
import { useState } from "react";
import { checkAddress, normalizeAddress } from "./address";
import ConnectButton from "./ConnectButton";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { selectConnection, setAddress, connectToSocket } from "@/store/connectionSlice";

export default function AddressInput() {
  const dispatch = useAppDispatch();
  const currentConnection = useAppSelector(selectConnection);

  const [value, setValue] = useState<string>(normalizeAddress(currentConnection.address));
  const [status, setStatus] = useState<"ok" | "error">("ok");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    const newAddress = "ws://" + event.target.value;
    if (checkAddress(newAddress)) {
      setStatus("error")
    } else {
      dispatch(setAddress(newAddress));
      setStatus("ok");
    }
  }

  const handleClick = () => {
    if (status == "ok") {
      dispatch(connectToSocket());
    }
  }

  return (
    <Box sx={{
      display: "flex", justifyContent: 'center', flexDirection: 'column',
      paddingLeft: 2, paddingRight: 4, paddingTop: 1
    }}>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="address-input">WS address</InputLabel>
        <OutlinedInput
          id="address-input"
          startAdornment={<InputAdornment position="start">ws://</InputAdornment>}
          label="WS Address"
          value={value}
          onChange={handleChange}
          endAdornment={<InputAdornment position="end">
            <ConnectButton onClick={handleClick} />
          </InputAdornment>}
        />
      </FormControl>
      {(status == "error") &&
        <Alert severity="error">Invalid address</Alert>
      }
    </Box>
  )
}
