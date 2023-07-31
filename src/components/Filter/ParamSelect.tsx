import * as React from 'react';
import {
  Box, OutlinedInput, InputLabel, MenuItem, FormControl, Chip
} from "@mui/material";
import Select, {SelectChangeEvent} from '@mui/material/Select';


interface ISelectProps {
  items: string[],
  label: string,
  submitParams: (object: any) => void,
  type: "type" | "level"
}

export default function ParamSelect(props: ISelectProps) {
  const [item, setItem] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof item>) => {
    const {
      target: {value},
    } = event;
    const newValue = typeof value === 'string' ? value.split(',') : value;
    setItem(newValue);
    submit(newValue);
  };

  const submit = (value: string[]) => {
    if (props.type == "level") {
      props.submitParams({
        info: value.includes("info"),
        debug: value.includes("debug"),
        warning: value.includes("warning")
      });
    } else {
      props.submitParams({
        enter: value.includes("enter"),
        exit: value.includes("exit"),
      });
    }
  }

  return (
    <FormControl sx={{width: "100%"}} size='small'>
      <InputLabel>{props.label}</InputLabel>
      <Select
        multiple
        value={item}
        onChange={handleChange}
        input={<OutlinedInput label={props.label}/>}
        renderValue={(selected) => (
          <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
            {selected.map((value) => (
              <Chip key={value} label={value}/>
            ))}
          </Box>
        )}
      >
        {props.items.map((name) => (
          <MenuItem
            key={name}
            value={name}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

