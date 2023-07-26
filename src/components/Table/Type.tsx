import { Chip } from "@mui/material";

export default function Type(props: { type: string }) {
  let label: string = "enter";
  let color: string = "success";
  if (props.type == "X") { // exit
    label = "exit";
    color = "error";
  }
  return <Chip label={label} color={color} variant="outlined" sx={{ width: "100%" }} />
}
