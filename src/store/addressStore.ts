const address: { address: string } = { address: "localhost:8080/" };
let listeners = [];

export const addressStore = {
  setAddress(newAddress: string) {
    address.address = newAddress;
    emitChange();
  },
  subscribe(listener: any) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  },
  getSnapshot() {
    return address;
  }
};

function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}

