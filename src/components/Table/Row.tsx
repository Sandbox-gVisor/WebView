import React, { useState } from "react";
import {
  TableRow, TableCell, IconButton, Collapse,
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { TLog } from '@/utils/types';
import AdditionalInfo from "./AdditionalInfo";
import Type from "./Type";

export default function Row(props: { row: TLog }) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.Taskname}
        </TableCell>
        <TableCell align="left"><Type type={row.LogType} /></TableCell>
        <TableCell align="right">{row.Syscallname}</TableCell>
        <TableCell align="right" sx={{
          width: 500, overflow: 'auto',
        }}>{row.Output}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <AdditionalInfo info={row.Rval} />
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


