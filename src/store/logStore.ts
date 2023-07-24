import { TLog } from "@/utils/types";

let logs: Array<TLog> = [];
let listeners = [];


export const logStore = {
  addLogs(log: TLog) {
    logs = [...logs, log];
    emitChange();
  },
  subscribe(listener: any) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  },
  getSnapshot() {
    return logs;
  }
};

function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}

