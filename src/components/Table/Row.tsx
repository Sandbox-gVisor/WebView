import React, { useState } from "react";
import {
  TableRow, TableCell, IconButton, Collapse,
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { TLog } from '@/utils/types';
import AdditionalInfo from "./AdditionalInfo";
import Type from "./Type";
import Level from "./Level";
import Time from "./Time";

export default function Row(props: { row: TLog }) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  const hasAdditional = row.LogType == "X";

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          {hasAdditional &&
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          }
        </TableCell>
        <TableCell align="left"><Time time={row.time} /></TableCell>
        <TableCell align="center"><Level level={row.level} /></TableCell>
        <TableCell align="left">{row.LogPrefix}</TableCell>
        <TableCell align="left">{row.Taskname}</TableCell>
        <TableCell align="left">{row.Syscallname}</TableCell>
        <TableCell align="center"><Type type={row.LogType} /></TableCell>
        <TableCell align="left" sx={{
          width: 500, overflow: 'auto',
        }}>{row.Output}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <AdditionalInfo info={hasAdditional ? row.Rval : null} />
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


