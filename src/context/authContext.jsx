import React, { useState, useEffect, createContext, useContext } from 'react';

const AuthContext = createContext();

const parseJwt = (token) => {
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

    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Failed to parse JWT:', error);
    return null;
  }
};

const isTokenExpired = (token) => {
  const decodedToken = parseJwt(token);
  if (decodedToken) {
    const now = Date.now() / 1000; // Current time in seconds
    return decodedToken.exp < now;
  }
  return true;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [userName, setUserName] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [action, setAction] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    const storedAction = localStorage.getItem('tradeAction');

    if (storedAction) {
      setAction(storedAction);
    }

    if (token) {
      if (isTokenExpired(token)) {
        alert('Your session has expired. Please log in again.');
        localStorage.removeItem('accessToken');
        setIsAuthenticated(false);
        setAccessToken(null);
        setUserName(null);
      } else {
        setIsAuthenticated(true);
        setAccessToken(token);
        const decodedToken = parseJwt(token);
        if (decodedToken) {
          setUserName(decodedToken.username);
        }
      }
    }
    setIsLoading(false);
  }, []);

  const login = (token) => {
    setIsAuthenticated(true);
    localStorage.setItem('accessToken', token);
    setAccessToken(token);
    const decodedToken = parseJwt(token);
    if (decodedToken) {
      setUserName(decodedToken.username);
    }
  };

  const logout = () => {
    setAccessToken(null);
    setUserName(null);
    localStorage.removeItem('accessToken');
    setIsAuthenticated(false);
  };

  const setTradeAction = (newAction) => {
    setAction(newAction);
    localStorage.setItem('tradeAction', newAction);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userName, login, logout, isLoading, action, setTradeAction }}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
