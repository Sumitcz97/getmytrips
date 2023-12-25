const path = require('path');
require('dotenv').config({ path: '../.env' });
 // Ensure the connection string is loaded
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI);

// Define a sample route
app.get('/', (req, res) => {
  res.send('Welcome to the GetMyTrips server!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
