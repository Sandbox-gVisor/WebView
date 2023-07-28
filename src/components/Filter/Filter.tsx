import {
  IconButton,
  Paper, Stack,
} from "@mui/material";
import ParamSelect from "./ParamSelect";
import RegexFilter from "./Regex";

import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch } from "react-redux";
import {
  setApplyed, setType, setLevel, setPrefix,
  setTaskname, setSysCallName, setClicked
} from "@/store/filterSlice";

export default function Filter() {
  const dispatch = useDispatch();
  return (
    <Stack direction="row" spacing={2} sx={{
      alignItems: "center", width: "min-content", alignSelf: "center",
      marginBottom: 4
    }} component={Paper}>
      <ParamSelect
        items={["info", "debug", "warning"]} label="Level" type="level"
        submitParams={level => dispatch(setLevel(level))}
      />
      <RegexFilter label="LogPrefix regex" submitRegex={regex => dispatch(setPrefix(regex))} />
      <RegexFilter label="TaskName regex" submitRegex={regex => dispatch(setTaskname(regex))} />
      <RegexFilter label="SysCallName regex" submitRegex={regex => dispatch(setSysCallName(regex))} />
      <ParamSelect
        items={["enter", "exit"]} label="Type" type="type"
        submitParams={type => dispatch(setType(type))}
      />
      <Stack>
        <IconButton color="success" onClick={() => { dispatch(setApplyed(true)); dispatch(setClicked(true)); }}>
          <CheckIcon />
        </IconButton>
        <IconButton color="error" onClick={() => { dispatch(setApplyed(true)); dispatch(setClicked(true)); }}>
          <ClearIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
}
