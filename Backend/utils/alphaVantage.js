// utils/alphaVantage.js
const axios = require('axios');

const API_KEY = ' I0EW8H9WZ3BRI10R';

exports.getStockData = async (symbol) => {
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=1min&apikey=${API_KEY}`;
  const response = await axios.get(url);
  return response.data;
};
