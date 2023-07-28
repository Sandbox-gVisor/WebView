export type TConnOut = {
  style: string;
  message: string;
}

export const getConnOut = (connection: { connected: boolean, pulled: boolean }) => {
  const res: TConnOut = {
    style: "error.main",
    message: "not connected",
  }
  if (connection.connected) {
    res.style = "warning.main";
    res.message = "pulling...";
  }
  if (connection.pulled) {
    res.style == "success.main";
    res.message = "connected";
  }
  return res;
}


