require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const paymentRoutes = require("./routes/paymentRoutes");
const cors = require("cors");

const app = express();

// Connect to MongoDB
connectDB();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use(
  cors({
    origin: "http://localhost:3000", // frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Routes
app.use("/payment", paymentRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
