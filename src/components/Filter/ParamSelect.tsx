import * as React from 'react';
import {
  Box, OutlinedInput, InputLabel, MenuItem, FormControl, Chip
} from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';


export default function ParamSelect(props: { items: string[], label: string, submitParams: (object: any) => void }) {
  const [item, setItem] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof item>) => {
    const {
      target: { value },
    } = event;
    setItem(
      typeof value === 'string' ? value.split(',') : value,
    );

    submit();
  };

  const submit = () => {
    const object = {};
    props.items.map(
      (item, i) => Object.defineProperty(object, item, {
        value: item[i],
        writable: false
      })
    );
    props.submitParams(object);
  }

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

