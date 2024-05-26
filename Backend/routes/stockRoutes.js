const express = require('express');
const { getWatchlist, addStock, removeStock, getStockData } = require('../controllers/stockController');
const auth = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/watchlist', auth, getWatchlist);
router.post('/watchlist', auth, addStock);
router.delete('/watchlist', auth, removeStock);
router.get('/stock/:stockSymbol', auth, getStockData);

module.exports = router;