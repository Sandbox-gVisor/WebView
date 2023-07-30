export const isValidRegex = (regex: string) => {
  try {
    console.log(regex)
    new RegExp(regex);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}