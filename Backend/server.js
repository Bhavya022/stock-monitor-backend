// server.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors')
const app = express();
app.use(cors()) 

connectDB();


app.use(express.json());


app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/stocks', require('./routes/stockRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
