export type TConnOut = {
  style: string;
  message: string;
}

export const getConnOut = (connection: { connected: boolean, pulled: boolean }) => {
  console.log(connection)
  const res: TConnOut = {
    style: "error.main",
    message: "not connected",
  }
  if (connection.connected) {
    res.style = "warning.main";
    res.message = "pulling...";
  }
  if (connection.pulled) {
    res.style == "primary.main";
    res.message = "connected";
  }
  return res;
}


