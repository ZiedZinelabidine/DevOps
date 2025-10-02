export const minutesToHours = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return { hours, minutes: remainingMinutes };
};

export const arrayToString = (arr) => {
  return `(${arr.join(", ")})`;
};
