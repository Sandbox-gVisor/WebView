import {
  TableHead, TableRow, TableCell
} from "@mui/material";


export default function Header() {
  return (
    <TableHead>
      <TableRow>
        <TableCell />
        <TableCell align="center">Level</TableCell>
        <TableCell align="left">Time</TableCell>
        <TableCell>LogPrefix</TableCell>
        <TableCell>Taskname</TableCell>
        <TableCell align="left">SysCallName</TableCell>
        <TableCell align="center">LogType</TableCell>
        <TableCell align="left">Output</TableCell>
      </TableRow>
    </TableHead>
  );
}
