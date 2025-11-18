require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
 const paymentRoutes = require("./routes/paymentRoutes");
const { errorHandler, notFound } = require('./middleware/errorHandler');
const cors = require('cors');
const app = express();
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev')); // request logging
app.use(cors({
  origin: 'http://localhost:5173', // your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'], // ✅ allow Authorization header
}));

// Routes
 app.use("/payment", paymentRoutes);

// health
app.get('/', (req, res) => res.send('API is running'));

// error handlers
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
