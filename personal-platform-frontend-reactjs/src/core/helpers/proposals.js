export const transformProposalsBeforeCreation = (proposals) => {
  return proposals.map((obj) => {
    const { offre, userImage, ...rest } = obj; // Destructuring assignment
    return rest;
  });
};
