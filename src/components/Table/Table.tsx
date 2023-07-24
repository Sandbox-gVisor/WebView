import { Table, TableContainer, TableBody, Paper } from "@mui/material";
import Header from "./Header";
import Row from "./Row";
import { useSyncExternalStore } from "react";
import { logStore } from "@/store/logStore";
import { TLog } from "@/utils/types";

export default function CollapsibleTable() {
  const logs = useSyncExternalStore(logStore.subscribe, logStore.getSnapshot);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <Header />
        <TableBody>
          {logs.map((log: TLog, index: number) => (
            <Row key={`row_${index}`} row={log} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
