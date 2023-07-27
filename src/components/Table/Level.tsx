import { Chip } from "@mui/material";

export default function Level({ level }: { level: string }) {
  let color: string;
  switch (level) {
    case "warning":
      color = "warning";
      break;
    case "debug":
      color = "error";
      break;
    default:
      color = "success";
  }
  return <Chip label={level} color={color} variant="outlined" sx={{ width: "100%" }} />
}
