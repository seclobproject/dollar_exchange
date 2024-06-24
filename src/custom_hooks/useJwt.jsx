import { useState, useEffect } from 'react';

const useJwt = (token) => {
  const [decodedToken, setDecodedToken] = useState(null);

  useEffect(() => {
    if (token) {
      try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
          atob(base64)
            .split('')
            .map((c) => {
              return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join('')
        );

        setDecodedToken(JSON.parse(jsonPayload));
      } catch (error) {
        console.error('Failed to parse JWT:', error);
        setDecodedToken(null);
      }
    }
  }, [token]);

  return decodedToken;
};

export default useJwt;
