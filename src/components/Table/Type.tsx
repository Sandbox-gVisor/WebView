import { Chip } from "@mui/material";

export default function Type(props: { type: string }) {
  let label: string = "enter";
  let color: "primary" | "secondary" = "primary";
  if (props.type == "X") { // exit
    label = "exit";
    color = "secondary";
  }
  return <Chip label={label} color={color} variant="filled" sx={{ width: "100%" }} />
}
