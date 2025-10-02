export const decodeLoginUserResponse = (response) => {
  const decodedUser = {
    user: response.user,
    token: response.token,
  };
  return decodedUser;
};
