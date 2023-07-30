import {useState} from "react"
import {TextField, Alert, Box} from "@mui/material";
import {isValidRegex} from "@/utils";


export default function RegexFilter(props: { label: string, submitRegex: (regex: string) => void }) {
  const [value, setValue] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);

  const handleChange = (newValue: string) => {
    setValue(newValue);
    if (isValidRegex(newValue)) {
      setIsValid(true);
      props.submitRegex(newValue);
    } else {
      setIsValid(false);
    }
  }

  return (
    <Box>
      <TextField
        sx={{width: "100%"}}
        label={props.label}
        defaultValue=""
        value={value}
        onChange={(event) => handleChange(event.target.value)}
        size="small"
        margin="dense"
      />
      {(!isValid) && <Alert severity="error">invalid regexp</Alert>
      }
    </Box>
  );
}
