import jwtDecode from 'jwt-decode';
let accessToken = '';

export const setAccessToken = (token: string): string => {
  return (accessToken = token);
};

export const getAccessToken = (): string => {
  return accessToken;
};
export const isTokenValid = (): boolean => {
  const token = getAccessToken();
  if (!token) {
    return true;
  }
  try {
    const { exp } = jwtDecode(token);
    if (Date.now() >= exp * 1000) {
      return false;
    } else {
      return true;
    }
  } catch (error) {
    return false;
  }
};
export const fetchNewAccessToken = () => {
  return fetch('/api/refresh_token', {
    method: 'POST',
    // credentials: 'include',
    // headers: {
    //   Accept: 'application/json',
    //   'Content-Type': 'application/json',
    // },
  });
};
export const fetchAndSetNewAccessToken = async (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    fetchNewAccessToken()
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
      )
      .catch(error => {
        reject(error);
      });
  });
};
