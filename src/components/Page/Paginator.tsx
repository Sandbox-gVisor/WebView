import {useAppDispatch, useAppSelector} from "@/app/hooks";
import {selectLogs, setPageIndex, setPageSize} from "@/store/logSlice";
import {
  Box, TextField, Paper, Typography
} from "@mui/material";
import React from "react";

function Paginator() {
  const dispatch = useAppDispatch();
  const logStore = useAppSelector(selectLogs);
  const countPages = Math.ceil(logStore.total / logStore.pageSize);

  const handleChangePage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    dispatch(setPageIndex(parseInt(event.target.value)));
  };


  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    dispatch(setPageSize(parseInt(event.target.value)));
  };

  return (
    <Box component={Paper} sx={{
      padding: 2,
      display: "flex", justifyContent: 'space-between', flexDirection: "column"
    }}>
      <TextField type="number" size="small" label="rows per page"
                 sx={{marginBottom: 2}}
                 inputProps={{min: 1, max: 1000}}
                 value={logStore.pageSize}
                 onChange={handleChangeRowsPerPage}
      />
      <TextField type="number" size="small" label="current page"
                 sx={{marginBottom: 2}}
                 inputProps={{min: 0, max: countPages - 1}}
                 value={logStore.pageIndex}
                 onChange={handleChangePage}
      />
      <Typography variant="caption">
        in total: {countPages} pages
      </Typography>
    </Box>
  );
}

export const PaginatorComponent = React.memo(Paginator);