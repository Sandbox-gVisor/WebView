import {
  Paper, Stack,
} from "@mui/material";
import ParamSelect from "./ParamSelect";
import RegexFilter from "./Regex";


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
    </Stack>
  );
}
