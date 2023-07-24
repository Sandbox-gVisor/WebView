import {
  FormControl, OutlinedInput, InputLabel, InputAdornment,
  Alert, Box,
} from "@mui/material";
import { useState } from "react";
import { checkAddress, normalizeAddress } from "./address";
import ConnectButton from "./ConnectButton";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { selectConnection, setAddress } from "@/store/connectionSlice";

export default function AddressInput() {
  const dispatch = useAppDispatch();
  const currentConnection = useAppSelector(selectConnection);

  const [value, setValue] = useState<string>(normalizeAddress(currentConnection.address));
  const [status, setStatus] = useState<"ok" | "error">("ok");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value)
    if (checkAddress("ws://" + value)) {
      setStatus("error")
    } else {
      setStatus("ok");
    }
  }

  const handleClick = () => {
    if (status == "ok") {
      dispatch(setAddress("ws://" + value));
    }
  }
  return (
    <Box sx={{ display: "flex", justifyContent: 'center', flexDirection: 'column' }}>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">WS address</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start">ws://</InputAdornment>}
          label="Address"
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
