import { IconButton, Tooltip } from "@mui/material";
import { getConnOut } from "./connect";

import connectionSvg from "@/assets/connect.svg";
import { useAppSelector } from "@/app/hooks";
import { selectConnection } from "@/store/connectionSlice";

const BUTTON_SIZE = 48;

export default function ConnectButton(props: { onClick: () => void }) {
  const connection = useAppSelector(selectConnection);
  const info = getConnOut(connection);

  return (
    <Tooltip title={info.message} arrow>
      <IconButton onClick={props.onClick}
        sx={{
          width: BUTTON_SIZE, height: BUTTON_SIZE,
          borderRadius: "100%", backgroundColor: info.style,
          "&:hover": { backgroundColor: info.style },
        }}>
        <img width={0.8 * BUTTON_SIZE} height={0.8 * BUTTON_SIZE} src={connectionSvg} />
      </IconButton>
    </Tooltip>
  );
}
