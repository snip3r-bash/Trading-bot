// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/entrepreneurshipQuiz', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connected');
})
.catch((err) => {
    console.error('MongoDB connection error:', err);
});

// API Routes
app.get('/', (req, res) => {
    res.send('Welcome to the entrepreneurship quiz application!');
});

// Example of additional API routes
app.get('/api/questions', (req, res) => {
    // Logic to get questions
    res.send('List of questions');
});

app.post('/api/questions', (req, res) => {
    // Logic to create a new question
    res.send('Question created');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
