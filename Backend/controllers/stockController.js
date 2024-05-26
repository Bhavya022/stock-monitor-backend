// controllers/stockController.js
const Watchlist = require('../models/Watchlist');
const alphaVantage = require('../utils/alphaVantage');

exports.getWatchlist = async (req, res) => {
  try {
    const watchlist = await Watchlist.find({ user: req.user.id });
    res.json(watchlist);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.addStock = async (req, res) => {
  const { stockSymbol } = req.body;
  try {
    let watchlist = await Watchlist.findOne({ user: req.user.id });
    if (!watchlist) {
      watchlist = new Watchlist({ user: req.user.id, stockSymbols: [stockSymbol] });
    } else {
      watchlist.stockSymbols.push(stockSymbol);
    }
    await watchlist.save();
    res.json(watchlist);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.removeStock = async (req, res) => {
  const { stockSymbol } = req.body;
  try {
    let watchlist = await Watchlist.findOne({ user: req.user.id });
    if (!watchlist) return res.status(400).json({ msg: 'Watchlist not found' });

    watchlist.stockSymbols = watchlist.stockSymbols.filter(symbol => symbol !== stockSymbol);
    await watchlist.save();
    res.json(watchlist);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.getStockData = async (req, res) => {
  const { stockSymbol } = req.params;
  try {
    const data = await alphaVantage.getStockData(stockSymbol);
    res.json(data);
  } catch (err) {
    res.status(500).send('Server error');
  }
};
