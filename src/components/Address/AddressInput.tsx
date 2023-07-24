import { FormControl, OutlinedInput, InputLabel, InputAdornment } from "@mui/material";
import { useState } from "react";

export default function AddressInput() {
  const [address, setAddress] = useState<string>("localhost:8080/");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  }
  return (
    <FormControl fullWidth sx={{ m: 1 }}>
      <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
      <OutlinedInput
        id="outlined-adornment-amount"
        startAdornment={<InputAdornment position="start">ws://</InputAdornment>}
        label="Amount"
        value={address}
        onChange={handleChange}
      />
    </FormControl>
  )
}
