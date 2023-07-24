export const checkAddress = (address: string) => {
  const regex = /^(wss?:\/\/)([0-9]{1,3}(?:\.[0-9]{1,3}){3}|[^\/]+):([0-9]{1,5})$/
  return !regex.test(address);
}

export const normalizeAddress = (address: string) => {
  if (address.startsWith("ws")) {
    return address.split("//")[1];
  }
  return address;
}
