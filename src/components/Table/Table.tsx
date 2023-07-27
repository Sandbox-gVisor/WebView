import { Table, TableContainer, TableBody, Paper } from "@mui/material";
import Header from "./Header";
import Row from "./Row";

import { TLog } from "@/utils/types";
import { useAppSelector } from "@/app/hooks";
import { selectLogs, setLogs } from "@/store/logSlice";

export default function CustomTable() {
  const logStore = useAppSelector(selectLogs);

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 600, minWidth: 1100 }}>
      <Table size="small" sx={{ maxWidth: 1100, minWidth: 1100 }}>
        <Header />
        <TableBody>
          {logStore.logs.map((log: TLog, index: number) => {
            return <Row key={`row_${index}`} row={log} />
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
