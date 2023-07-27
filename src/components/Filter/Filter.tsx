import { Stack } from "@mui/material";
import React from "react";
import ParamSelect from "./ParamSelect";


export default function Filter() {
  return (
    <Stack direction="row" spacing={2}>
      <ParamSelect items={["info", "debug", "warning"]} label="Level" />
      <ParamSelect items={["enter", "exit"]} label="Type" />
    </Stack>
  );
}
