const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware example (for logging requests)
app.use((req, res, next) => {
    console.log('Middleware example');
    next(); // Move to the next middleware or route
});

// Routes to serve HTML pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about_us', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about_us.html'));
});

app.get('/about_our_team', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about_our_team.html'));
});

app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'services.html'));
});

app.get('/testimonials', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'testimonials.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// API routes for handling form submissions
app.post('/api/comments', (req, res) => {
    // Handle comment submission
    console.log('Comment received:', req.body);
    res.json({ success: true, message: 'Comment submitted successfully!' });
});

app.post('/api/apply', (req, res) => {
    // Handle apply form submission
    console.log('Application received:', req.body);
    res.json({ success: true, message: 'Application submitted successfully!' });
});

// Example API route
app.get('/api/example', (req, res) => {
    res.json({ message: 'Example endpoint!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});



