import React, { createContext, useState, ReactNode, useEffect } from 'react';
import axios from 'axios';

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  login: async () => {},
  register: async () => {},
  logout: () => {}
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, { email, password });
    localStorage.setItem('token', res.data.token);
    setIsAuthenticated(true);
  };

  const register = async (username: string, email: string, password: string) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, { username, email, password });
    localStorage.setItem('token', res.data.token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
