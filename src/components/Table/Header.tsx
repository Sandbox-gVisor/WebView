import {
  TableHead, TableRow, TableCell
} from "@mui/material";


export default function Header() {
  return (
    <TableHead>
      <TableRow>
        <TableCell />
        <TableCell>Taskname</TableCell>
        <TableCell align="right">LogType</TableCell>
        <TableCell align="right">SysCallName</TableCell>
        <TableCell align="left">Output</TableCell>
      </TableRow>
    </TableHead>
  );
}
