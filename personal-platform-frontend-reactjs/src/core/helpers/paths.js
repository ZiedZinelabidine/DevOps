export const joinPaths = (paths) => {
  let joinedPath = "/";
  for (const path of paths) {
    joinedPath += `${path}/`;
  }
  return joinedPath;
};

export const createPath = (path) => {
  return `/${path}`;
};
