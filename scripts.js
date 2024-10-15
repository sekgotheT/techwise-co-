const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 8080;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // For URL-encoded form data

let comments = []; // In-memory storage for comments

// Endpoint to fetch comments
app.get('/api/comments', (req, res) => {
    res.json(comments);
});

// Endpoint to submit a comment and send an email
app.post('/api/comments', (req, res) => {
    const { name, email, message, applicantName, projectDescription } = req.body;

    // Ensure necessary fields are provided
    if (!name || (!message && !projectDescription)) {
        return res.status(400).json({ message: 'Name and message are required.' });
    }

    // Store comment locally
    comments.push({ name, message: message || projectDescription });

    // Email configuration using Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail', // or another email provider
        auth: {
            user: 'sekgothetshepang30@gmail.com', // replace with your email
            pass: 'Sekgothe@55', // replace with your email password
        },
    });

    const mailOptions = {
        from: email || 'your-email@gmail.com', // fallback if email is missing
        to: 'sekgothetshepang@gmail.com', // replace with your email
        subject: 'Form Submission',
        text: `Name: ${name || applicantName}\nEmail: ${email || 'No email provided'}\nMessage: ${message || projectDescription}`,
    };

    // Send email using Nodemailer
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ message: 'Error sending email.' });
        }
        console.log('Email sent: ' + info.response);
        return res.status(201).json({ message: 'Comment added and email sent successfully.' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
