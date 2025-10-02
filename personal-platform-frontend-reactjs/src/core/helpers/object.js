export const isObjectExist = (object) => {
  return typeof object !== "undefined";
};

export const objectIsEmpty = (object) => {
  return Object.keys(object).length === 0;
};

const toCamelizeString = (str) => {
  return str
    .replace(/[-_\s]+(.)?/g, (_, char) => (char ? char.toUpperCase() : ""))
    .replace(/^(.)/, (char) => char.toLowerCase());
};

export const toCamelCase = (data) => {
  if (Array.isArray(data)) {
    return data.map((item) => toCamelCase(item));
  }

  if (data !== null && typeof data === "object") {
    const camelData = {};

    Object.entries(data).forEach(([key, value]) => {
      camelData[toCamelizeString(key)] = toCamelCase(value);
    });

    return camelData;
  }

  return data;
};

const toSnakeString = (str) => {
  return str
    .replace(/([A-Z])/g, "_$1")
    .toLowerCase()
    .replace(/^_/, "");
};

export const toSnakeCase = (data) => {
  if (Array.isArray(data)) {
    return data.map((item) => toSnakeCase(item));
  }

  if (data !== null && typeof data === "object") {
    const snakeData = {};

    Object.entries(data).forEach(([key, value]) => {
      const snakeKey = toSnakeString(key);
      snakeData[snakeKey] = toSnakeCase(value);
    });

    return snakeData;
  }

  return data;
};
