const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());

let comments = []; // In-memory storage for comments

// Endpoint to fetch comments
app.get('/api/comments', (req, res) => {
    res.json(comments);
});

// Endpoint to submit a comment
app.post('/api/comments', (req, res) => {
    const { name, message } = req.body;
    if (name && message) {
        comments.push({ name, message });
        res.status(201).json({ message: 'Comment added successfully.' });
    } else {
        res.status(400).json({ message: 'Name and message are required.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
