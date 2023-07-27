import * as React from 'react';
import {
  Box, OutlinedInput, InputLabel, MenuItem, FormControl, Chip
} from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';


export default function ParamSelect(props: { items: string[], label: string }) {
  const [item, setItem] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof item>) => {
    const {
      target: { value },
    } = event;
    setItem(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 120 }} size='small'>
        <InputLabel>{props.label}</InputLabel>
        <Select
          multiple
          value={item}
          onChange={handleChange}
          input={<OutlinedInput label={props.label} />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
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
    </div>
  );
}

