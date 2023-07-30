import {
  IconButton,
  Paper, Stack,
} from "@mui/material";
import ParamSelect from "./ParamSelect";
import RegexFilter from "./Regex";

import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import {useDispatch} from "react-redux";
import {
  setApplied, setType, setLevel, setPrefix,
  setTaskname, setSysCallName, setClicked
} from "@/store/filterSlice";

export default function Filter() {
  const dispatch = useDispatch();
  return (
    <Stack spacing={2} component={Paper}
           sx={{
             alignItems: "center", alignSelf: "center",
             marginBottom: 4, padding: 2
           }}>
      <ParamSelect
        items={["info", "debug", "warning"]} label="Level" type="level"
        submitParams={level => dispatch(setLevel(level))}
      />
      <RegexFilter label="LogPrefix regex" submitRegex={regex => dispatch(setPrefix(regex))}/>
      <RegexFilter label="TaskName regex" submitRegex={regex => dispatch(setTaskname(regex))}/>
      <RegexFilter label="SysCallName regex" submitRegex={regex => dispatch(setSysCallName(regex))}/>
      <ParamSelect
        items={["enter", "exit"]} label="Type" type="type"
        submitParams={type => dispatch(setType(type))}
      />
      <Stack direction="row">
        <IconButton color="success" onClick={() => {
          dispatch(setApplied(true));
          dispatch(setClicked(true));
        }}>
          <CheckIcon/>
        </IconButton>
        <IconButton color="error" onClick={() => {
          dispatch(setApplied(false));
          dispatch(setClicked(true));
        }}>
          <ClearIcon/>
        </IconButton>
      </Stack>
    </Stack>
  );
}
