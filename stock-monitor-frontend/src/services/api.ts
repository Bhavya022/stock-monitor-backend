import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

export const register = (userData: { username: string; email: string; password: string }) => {
  return api.post('/auth/register', userData);
};

export const login = (userData: { email: string; password: string }) => {
  return api.post('/auth/login', userData);
};

export const getWatchlist = (token: string) => {
  return api.get('/stocks/watchlist', {
    headers: { 'x-auth-token': token },
  });
};

export const addStock = (token: string, stockSymbol: string) => {
  return api.post(
    '/stocks/watchlist',
    { stockSymbol },
    {
      headers: { 'x-auth-token': token },
    }
  );
};

export const removeStock = (token: string, stockSymbol: string) => {
  return api.delete('/stocks/watchlist', {
    headers: { 'x-auth-token': token },
    data: { stockSymbol },
  });
};

export const getStockData = (token: string, stockSymbol: string) => {
  return api.get(`/stocks/stock/${stockSymbol}`, {
    headers: { 'x-auth-token': token },
  });
};
