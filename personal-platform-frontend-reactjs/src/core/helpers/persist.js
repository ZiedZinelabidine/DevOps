import { isString } from "./validators";

export const persistData = (key, data) => {
  if (typeof data === "undefined" || data === null) {
    return;
  }
  const dataString = isString(data) ? data : JSON.stringify(data);
  localStorage.setItem(key, dataString);
};
// Extract data from local storage buy a key
export const getPersistData = (key, parse) => {
  try {
    return parse
      ? JSON.parse(localStorage.getItem(key) || "{}")
      : localStorage.getItem(key);
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
// Remove data from the local storage buy a key
export const removePersistData = (key) => {
  localStorage.removeItem(key);
};
