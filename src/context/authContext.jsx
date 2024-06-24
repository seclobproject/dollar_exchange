import React, { useState, useEffect, createContext, useContext } from 'react';
import useJwt from '../custom_hooks/useJwt';
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

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [userName, setUserName] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setIsAuthenticated(true)
      setAccessToken(token);
      const decodedToken = parseJwt(token);
      if (decodedToken) {
        setUserName(decodedToken.username);
        setIsAuthenticated(true);
      }
    }
    setIsLoading(false);
  }, []);

  const login = (token) => {
    setAccessToken(token);
    const decodedToken = parseJwt(token);
    if (decodedToken) {
      setUserName(decodedToken.username);
      localStorage.setItem('accessToken', token);
      setIsAuthenticated(true);
    }
  };

  const logout = () => {
    setAccessToken(null);
    setUserName(null);
    localStorage.removeItem('accessToken');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userName, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
