import {
  TableHead, TableRow, TableCell
} from "@mui/material";


export default function Header() {
  return (
    <TableHead>
      <TableRow>
        <TableCell />
        <TableCell align="left">Time</TableCell>
        <TableCell align="center">Level</TableCell>
        <TableCell>LogPrefix</TableCell>
        <TableCell>Taskname</TableCell>
        <TableCell align="right">SysCallName</TableCell>
        <TableCell align="right">LogType</TableCell>
        <TableCell align="right">Output</TableCell>

      </TableRow>
    </TableHead>
  );
}
