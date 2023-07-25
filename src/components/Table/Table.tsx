import { Table, TableContainer, TableBody, Paper } from "@mui/material";
import Header from "./Header";
import Row from "./Row";
import { useSyncExternalStore } from "react";

import { TLog } from "@/utils/types";
import { useAppSelector } from "@/app/hooks";
import { selectLogs } from "@/store/logSlice";

export default function CollapsibleTable() {
  const logStore = useAppSelector(selectLogs);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <Header />
        <TableBody>
          {logStore.logs.map((log: TLog, index: number) => (
            <Row key={`row_${index}`} row={log} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
