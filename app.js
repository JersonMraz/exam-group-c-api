const express = require('express');
const examRoutes = require('./routes/exams');

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Use the exams routes
app.use('/', examRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Issue has been resolved.