import React from 'react';
import { List } from '@mui/material';
import StockItem from '../components/StockItem';
import { Stock } from '../types';

interface WatchlistProps {
  stocks: Stock[];
}

const Watchlist: React.FC<WatchlistProps> = ({ stocks }) => {
  return (
    <List>
      {stocks.map((stock) => (
        <StockItem key={stock.symbol} stock={stock} />
      ))}
    </List>
  );
};

export default Watchlist;
