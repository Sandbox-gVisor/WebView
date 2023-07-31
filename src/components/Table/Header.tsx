import React from "react";
import {
  TableHead, TableRow, TableCell
} from "@mui/material";


function Header() {
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

export const HeaderComponent = React.memo(Header);