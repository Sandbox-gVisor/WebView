import { Table, TableContainer, TableBody, Paper } from "@mui/material";
import Header from "./Header";
import Row from "./Row";

import { TLog } from "@/utils/types";
import { useAppSelector } from "@/app/hooks";
import { selectLogs } from "@/store/logSlice";

export default function CustomTable() {
  const logStore = useAppSelector(selectLogs);

  return (
    <TableContainer component={Paper} sx={{ minWidth: 1100, maxWidth: "90vw" }}>
      <Table size="small" sx={{ maxWidth: 1100, minWidth: "85vw" }}>
        <Header />
        <TableBody sx={{ height: 400, maxHeight: 400 }}>
          {logStore.logs.map((log: TLog, index: number) => {
            return <Row key={`row_${index}`} row={log} />
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
