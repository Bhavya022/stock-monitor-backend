import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Watchlist from './Watchlist';
import { Stock } from '../types';
import { Container, Typography, Button, TextField } from '@mui/material';

const Dashboard: React.FC = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [newStock, setNewStock] = useState('');

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/stocks/watchlist`, {
          headers: {
            'x-auth-token': localStorage.getItem('token')
          }
        });
        setStocks(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStocks();
  }, []);

  const addStock = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/stocks/watchlist`, { stockSymbol: newStock }, {
        headers: {
          'x-auth-token': localStorage.getItem('token')
        }
      });
      setStocks(res.data);
      setNewStock('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Typography variant="h4">Dashboard</Typography>
      <TextField
        label="Add Stock Symbol"
        value={newStock}
        onChange={(e) => setNewStock(e.target.value)}
      />
      <Button onClick={addStock} variant="contained" color="primary">Add Stock</Button>
      <Watchlist stocks={stocks} />
    </Container>
  );
};

export default Dashboard;
