import {
  TableRow, TableCell, Box, Typography,
  Table, TableBody,
} from "@mui/material";

import { TRval } from "@/utils/types";


const createRow = (key: string, value: string) => {
  return (
    <TableRow>
      <TableCell align="left">{key}</TableCell>
      <TableCell align="right">{value}</TableCell>
    </TableRow>
  );
}


export default function AdditionalInfo({ info }: { info: TRval | null }) {
  if (!info) {
    return <></>
  }
  return (
    <Box sx={{ margin: 1 }}>
      <Typography variant="h6" gutterBottom component="div">
        Return value
      </Typography>
      <Table size="small" aria-label="purchases">
        <TableBody>
          {createRow("Return value", info.Retval.join("\n"))}
          {!info.Errno && <>
            {createRow("Error", info.Err)}
            {createRow("Errno", info.Errno)}
          </>
          }
          {createRow("Elapsed", info.Elapsed)}
        </TableBody>
      </Table>
    </Box>
  );
}
