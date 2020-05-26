let accessToken = '';

export const setAccessToken = (token: string): string => {
  return (accessToken = token);
};

export const getAccessToken = (): string => {
  return accessToken;
};
