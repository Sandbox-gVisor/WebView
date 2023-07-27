import { useState } from "react"
import { TextField } from "@mui/material";


export default function RegexFilter(props: { label: string }) {
  const [value, setValue] = useState<string>("");
  return (
    <TextField
      sx={{ width: 150 }}
      label={props.label}
      defaultValue=""
      value={value}
      onChange={(event) => setValue(event.target.value)}
      size="small"
    />
  );
}
