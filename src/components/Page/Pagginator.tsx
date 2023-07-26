import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { selectLogs, setPageIndex, setPageSize } from "@/store/logSlice";
import { TablePagination } from "@mui/material";

export default function Pagginator() {
  const dispatch = useAppDispatch();
  const logStore = useAppSelector(selectLogs);

  const handleChangePage = (
    _: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    dispatch(setPageIndex(newPage));
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    dispatch(setPageSize(parseInt(event.target.value, 10)));
  };

  return (
    <TablePagination
      component="div"
      count={logStore.total}
      page={logStore.pageIndex}
      onPageChange={handleChangePage}
      rowsPerPage={logStore.pageSize}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
