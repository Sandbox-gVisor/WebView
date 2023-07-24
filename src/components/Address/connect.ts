import { TConnection } from "@/store/connectionStore";

export type TConnOut = {
  style: string;
  message: string;
}

export const getConnOut = (connection: TConnection) => {
  const res: TConnOut = {
    style: "success.main",
    message: "Connected",
  }
  if (!connection.connected) {
    res.style = "error.main";
    res.message = "Disconnected";
  } else if (!connection.pulled) {
    res.style = "warning.main",
      res.message = "Pulling...";
  }
  return res;
}


