import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function ParamSelect(props: { items: Array<string>, label: string }) {
  const [checked, setChecked] = React.useState([true, true, true]);

  const handleChangeMain = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked, event.target.checked]);
  };

  const handleChangeItem = (index: number) => {
    const newChecked = [false, false, false];
    for (let i = 0; i < props.items.length; ++i) {
      if (i == index) {
        newChecked[i] = !checked[i];
        continue;
      }
      newChecked[i] = checked[i];
    }
    setChecked(newChecked);
  }

  const checkSize = props.items.filter((_, i) => checked[i]).length;

  return (
    <div>
      <FormControlLabel
        label={props.label}
        control={
          <Checkbox
            checked={checkSize == props.items.length}
            indeterminate={checkSize > 0 && checkSize < props.items.length}
            onChange={handleChangeMain}
          />
        }
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
        {props.items.map((item, index) => <FormControlLabel
          label={item}
          control={<Checkbox checked={checked[index]} onChange={() => handleChangeItem(index)} />}
        />)}
      </Box>

    </div>
  );
}

