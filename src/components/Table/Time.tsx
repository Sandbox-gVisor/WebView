import React from "react";
import {
  Typography,
} from "@mui/material";
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

import { styled } from '@mui/material/styles';

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

export default function Time({ time }: { time: string }) {
  const [dateString, timeString] = time.split("T");
  const [shortTime, shortZ] = timeString.split('.');
  return (
    <HtmlTooltip disableFocusListener disableTouchListener title={
      <React.Fragment>
        <Typography color="black">
          {time}
        </Typography>
      </React.Fragment>
    } arrow>
      <Typography variant="body2">{shortZ}</Typography>
      <Typography variant="caption">{shortTime}</Typography>
    </HtmlTooltip>
  );
}
