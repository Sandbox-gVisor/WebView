export type TConnection = {
  address: string;
  connected: boolean;
  pulled: boolean;
}

let connection: TConnection = { address: "", connected: false, pulled: false };
let listeners = [];

export const connectionStore = {
  setAddress(newAddress: string) {
    connection.address = newAddress;
    emitChange();
  },
  setConnected(conn: boolean) {
    connection.connected = conn;
    emitChange();
  },
  setPulled(p: boolean) {
    connection.pulled = p;
    emitChange();
  },
  subscribe(listener: any) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  },
  getSnapshot() {
    return connection;
  }
};

function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}

