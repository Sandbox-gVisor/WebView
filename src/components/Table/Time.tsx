import React from "react";
import {
  Typography,
} from "@mui/material";
import Tooltip from '@mui/material/Tooltip';


export default function Time({ time }: { time: string }) {
  const [dateString, timeString] = time.split("T");
  const [shortTime, shortZ] = timeString.split('.');
  return (
    <Tooltip disableFocusListener disableTouchListener title={
      <React.Fragment>
        <Typography color="black">
          {time}
        </Typography>
      </React.Fragment>
    }>
      <React.Fragment>
        <Typography variant="body2">{shortZ}</Typography>
        <Typography variant="caption">{shortTime} at {dateString}</Typography>
      </React.Fragment>
    </Tooltip>
  );
}
