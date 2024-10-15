const express = require('express');
const router = express.Router();

// POST route to handle comment submissions
router.post('/comments', (req, res) => {
    const { name, comment } = req.body;

    // Here, you would typically save the comment to a database
    console.log(`Comment received: ${name} - ${comment}`);

    // Send a success response
    res.json({ success: true, message: 'Comment submitted successfully!' });
});

// POST route to handle application submissions
router.post('/apply', (req, res) => {
    const { applicantName, applicantEmail, projectDescription } = req.body;

    // Here, you would typically save the application to a database
    console.log(`Application received: ${applicantName}, ${applicantEmail}, ${projectDescription}`);

    // Send a success response
    res.json({ success: true, message: 'Application submitted successfully!' });
});

// Export the router to use in app.js
module.exports = router;
