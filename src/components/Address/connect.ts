import { TConnection } from "@/store/connectionStore";

export type TConnOut = {
  style: string;
  message: string;
}

export const getConnOut = (connection: TConnection) => {
  console.log(connection);
  const res: TConnOut = {
    style: "error.main",
    message: "Not connected",
  }
  if (connection.pulled) {
    res.style = "success.main";
    res.message = "Connected";
  }
  return res;
}


