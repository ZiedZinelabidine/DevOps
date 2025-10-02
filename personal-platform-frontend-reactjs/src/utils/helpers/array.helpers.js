export const generateArray = (lengthArray) => {
  const array = [0];
  for (let i = 1; i < lengthArray; i++) {
    array.push(i);
  }
  return array;
};
