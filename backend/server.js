const express = require('express');
const connectDB = require('./db');
const app = express();

// Connect to MongoDB
connectDB();

// Middleware and Routes
app.use(express.json()); // For parsing application/json

// Define routes here
app.use('/api/shops', require('./routes/shops'));
app.use('/api/owners', require('./routes/owners'));
app.use('/api/rentals', require('./routes/rentals'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
