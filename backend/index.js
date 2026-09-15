const dns = require('node:dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Routes & Models
const authRoute = require('./routes/authRoute');
const { Holding } = require('./model/holdingsModel');
const { Position } = require('./model/positionModel');
const { Order } = require('./model/orderModel');

const app = express();

const port = process.env.PORT || 3000;
const url = process.env.MONGO_URL;

// 1. CORS Configuration (Allows Cookies between Frontend and Backend)
app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173', // Vite default port
    credentials: true, // Crucial for cookieParser & auth tokens
  })
);

// 2. Essential Parsers
app.use(express.json());
app.use(cookieParser());

// 3. Mount Auth Routes
app.use('/', authRoute);

// 4. Application Routes
app.get('/allHoldings', async (req, res) => {
  try {
    const allHoldings = await Holding.find({});
    res.status(200).json(allHoldings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch holdings', details: err.message });
  }
});

app.get('/allPositions', async (req, res) => {
  try {
    const allPositions = await Position.find({});
    res.status(200).json(allPositions);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch positions', details: err.message });
  }
});

app.post('/newOrder', async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    const newOrder = new Order({
      name,
      qty,
      price,
      mode,
    });

    await newOrder.save(); // Await ensures saving completes before responding
    res.status(201).json({ message: 'Order has been saved', order: newOrder });
  } catch (err) {
    res.status(400).json({ error: 'Failed to create order', details: err.message });
  }
});

// 5. Connect DB and Start Server
mongoose
  .connect(url)
  .then(() => {
    console.log('DB connected successfully');
    app.listen(port, () => {
      console.log(`App is listening on port ${port}`);
    });
  })
  .catch((e) => {
    console.error('Database connection error:', e);
  });