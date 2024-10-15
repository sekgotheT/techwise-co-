// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const commentsRoutes = require('./routes/comments');

const commentsRouter = require('./routes/comments');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;


// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB

mongoose.connect('your-mongodb-connection-string')
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));


// Routes
app.use('/api/comments', commentsRouter);
app.use('/comments', commentsRoutes);
app.get('/comments', (req, res) => {
  res.send('Comments route');
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
