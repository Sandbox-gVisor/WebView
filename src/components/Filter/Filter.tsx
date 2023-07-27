import {
  Button,
  IconButton,
  Paper, Stack,
} from "@mui/material";
import ParamSelect from "./ParamSelect";
import RegexFilter from "./Regex";

import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

export default function Filter() {
  return (
    <Stack direction="row" spacing={2} sx={{
      alignItems: "center", width: "min-content", alignSelf: "center",
      marginBottom: 4
    }} component={Paper}>
      <ParamSelect items={["info", "debug", "warning"]} label="Level" />
      <RegexFilter label="LogPrefix regex" />
      <RegexFilter label="TaskName regex" />
      <RegexFilter label="SysCallName regex" />
      <ParamSelect items={["enter", "exit"]} label="Type" />
      <Stack>
        <IconButton color="success"><CheckIcon /></IconButton>
        <IconButton color="error"><ClearIcon /></IconButton>
      </Stack>
    </Stack>
  );
}
