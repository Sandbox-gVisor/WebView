import {
  TextField
} from "@mui/material";

export default function CustomPaginator() {
  return <TextField type="number" inputProps={{min: 4, max: 10}}/>
}
