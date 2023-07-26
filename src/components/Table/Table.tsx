import { Table, TableContainer, TableBody, Paper } from "@mui/material";
import Header from "./Header";
import Row from "./Row";

import { TLog } from "@/utils/types";
import { useAppSelector } from "@/app/hooks";
import { selectLogs, setLogs } from "@/store/logSlice";

export default function CollapsibleTable() {
  // const dispatch = useAppDispatch();
  const logStore = useAppSelector(selectLogs);
  // if (logStore.logs.length > logStore.pageSize) {
  //   dispatch(setLogs(logStore.logs.filter((_, i) => i % 2 == 0)));
  // }

  return (
    <TableContainer component={Paper} sx={{ maxHeight: "85vh" }}>
      <Table size="small" sx={{ maxWidth: 1100 }}>
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
