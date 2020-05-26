let accessToken = '';

export const setAccessToken = (token: string): string => {
  return (accessToken = token);
};

export const getAccessToken = (): string => {
  return accessToken;
};

export const fetchNewAccessToken = async (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    fetch('/api/refresh_token', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(
        result => {
          if (result && result.accessToken) {
            setAccessToken(result.accessToken);
            resolve(true);
          } else {
            resolve(false);
          }
        },
        error => {
          reject(error);
        },
      );
  });
};
