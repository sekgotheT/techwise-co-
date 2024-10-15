const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected successfully.');
        mongoose.disconnect(); // Close the connection after testing
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });
