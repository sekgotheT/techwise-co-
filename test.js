const mongoose = require('mongoose');

// Connection URI
const uri = 'mongodb://localhost:27017/test';

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected successfully.');

        // Do any additional operations here, e.g., queries or model definitions

        // Close the connection after completing tasks
        mongoose.disconnect()
            .then(() => console.log('MongoDB connection closed.'))
            .catch(err => console.error('Error closing MongoDB connection:', err));
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });
