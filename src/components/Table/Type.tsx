import { Chip } from "@mui/material";

export default function Type(props: { type: string }) {
  let label: string = "Enter";
  let color: string = "success";
  if (props.type == "X") { // exit
    label = "Exit";
    color = "error";
  }
  return <Chip label={label} color={color} variant="filled" />
}
