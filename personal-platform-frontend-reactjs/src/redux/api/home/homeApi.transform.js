export const transformFormation = (formationApi) => {
  const result = [];
  const chunkSize = 3;

  for (let i = 0; i < formationApi.length; i += chunkSize) {
    const chunk = formationApi.slice(i, i + chunkSize);
    result.push({ page: i / chunkSize + 1, data: chunk });
  }

  return result;
};
