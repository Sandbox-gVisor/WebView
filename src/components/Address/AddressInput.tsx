import {
  FormControl, OutlinedInput, InputLabel, InputAdornment,
  Alert, Box,
} from "@mui/material";
import { useState, useSyncExternalStore } from "react";
import { addressStore } from "../../store/addressStore";
import { checkAddress, normalizeAddress } from "./address";
import ConnectButton from "./ConnectButton";

export default function AddressInput() {
  const address = useSyncExternalStore(addressStore.subscribe, addressStore.getSnapshot);
  const [value, setValue] = useState<string>(normalizeAddress(address));
  const [status, setStatus] = useState<"ok" | "error">("ok");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value)
    if (checkAddress(address)) {
      setStatus("error")
    } else {
      setStatus("ok");
    }
  }

  const handleClick = () => {
    if (status == "ok") {
      addressStore.setAddress("ws://" + value);
      console.log(value)
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
