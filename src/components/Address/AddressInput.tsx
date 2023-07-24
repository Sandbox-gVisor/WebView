import {
  FormControl, OutlinedInput, InputLabel, InputAdornment,
  Alert, Box
} from "@mui/material";
import { useState, useSyncExternalStore } from "react";
import { addressStore } from "../../store/addressStore";
import { checkAddress, normalizeAddress } from "./address";

export default function AddressInput() {
  const address = useSyncExternalStore(addressStore.subscribe, addressStore.getSnapshot);
  const [value, setValue] = useState<string>(normalizeAddress(address.address));
  const [status, setStatus] = useState<"ok" | "error">("ok");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    addressStore.setAddress("ws://" + value)
    setValue(value)
    if (checkAddress(address.address)) {
      setStatus("error")
    } else {
      setStatus("ok");
    }
  }
  return (
    <Box sx={{ display: "flex", justifyContent: 'center', flexDirection: 'column' }}>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start">ws://</InputAdornment>}
          label="Address"
          value={value}
          onChange={handleChange}
        />
      </FormControl>
      {(status == "error") &&
        <Alert severity="error">Invalid address</Alert>
      }
    </Box>
  )
}
