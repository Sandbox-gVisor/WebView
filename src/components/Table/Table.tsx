import { Table, TableContainer, TableBody, Paper } from "@mui/material";
import Header from "./Header";
import Row from "./Row";

import { TLog } from "@/utils/types";
import { useAppSelector } from "@/app/hooks";
import { selectLogs } from "@/store/logSlice";

export default function CollapsibleTable() {
  const logStore = useAppSelector(selectLogs);
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "85vh" }}>
      <Table size="small" sx={{ maxWidth: 1100 }}>
        <Header />
        <TableBody>
          {logStore.logs.map((log: TLog, index: number) => {
            console.log(index, logStore.logs.length)
            return <Row key={`row_${index}`} row={log} />
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
