import {Box} from "@mui/material";
import {useAppSelector} from "@/app/hooks";
import {selectPage} from "@/store/navigationSlice";

import ViewPage from "@/pages/ViewPage";
import EditPage from "@/pages/EditPage";


export default function Main() {
  const currentPage = useAppSelector(selectPage);
  return (
    <Box sx={{width: "100vw", maxHeight: "100vh", minHeight: "100vh"}}>
      {(currentPage == "view")
        ? <ViewPage/>
        : <EditPage/>
      }
    </Box>
  )
}
