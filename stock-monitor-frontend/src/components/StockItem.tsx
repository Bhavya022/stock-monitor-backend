import React from 'react';
import { ListItem, ListItemText } from '@mui/material';
import { Stock } from '../types';

interface StockItemProps {
  stock: Stock;
}

const StockItem: React.FC<StockItemProps> = ({ stock }) => {
  return (
    <ListItem>
      <ListItemText primary={stock.symbol} secondary={`Price: $${stock.price}`} />
    </ListItem>
  );
};

export default StockItem;
