import {useState} from "react"
import {TextField} from "@mui/material";


export default function RegexFilter(props: { label: string, submitRegex: (regex: string) => void }) {
  const [value, setValue] = useState<string>("");

  const handleChange = (newValue: string) => {
    setValue(newValue);
    props.submitRegex(newValue);
  }

  return (
    <TextField
      sx={{width: 120}}
      label={props.label}
      defaultValue=""
      value={value}
      onChange={(event) => handleChange(event.target.value)}
      size="small"
    />
  );
}
