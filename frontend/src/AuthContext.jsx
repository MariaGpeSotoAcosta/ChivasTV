// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react'


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/auth', { withCredentials: true })
      .then(res => {
        if (res.data.loggedIn) {
          setIsAuthenticated(true);
          setName(res.data.name);
        } else {
          setIsAuthenticated(false);
          setName('');
        }
      })
      .catch(() => {
        setIsAuthenticated(false);
        setName('');
      });
  }, []);

  const logout = () => {
    axios.post('http://localhost:3000/logout', {}, { withCredentials: true }).then(() => {
      setIsAuthenticated(false);
      setName('');
    });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, name, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
