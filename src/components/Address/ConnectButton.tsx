import { IconButton, Tooltip } from "@mui/material";
import { useSyncExternalStore } from "react";
import connectionSvg from "@/assets/connect.svg";
import { connectionStore } from "@/store/connectionStore";
import { getConnOut } from "./connect";

const BUTTON_SIZE = 60;

export default function ConnectButton() {
  const connection = useSyncExternalStore(connectionStore.subscribe, connectionStore.getSnapshot);
  const info = getConnOut(connection);

  return (
    <Tooltip title={info.message} arrow>
      <IconButton sx={{
        width: BUTTON_SIZE, height: BUTTON_SIZE,
        borderRadius: 5, backgroundColor: info.style,
        "&:hover": { backgroundColor: info.style },

      }}>
        <img width={0.8 * BUTTON_SIZE} height={0.8 * BUTTON_SIZE} src={connectionSvg} />
      </IconButton>
    </Tooltip>
  );
}
