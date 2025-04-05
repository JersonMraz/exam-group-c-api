const express = require('express');
const router = express.Router();

// Hardcoded exams data
let exams = [
    { id: 1, name: 'Math Exam', date: '2025-04-10' },
    { id: 2, name: 'Science Exam', date: '2025-04-15' }
];



// Member 2: POST /exams (adds a new exam to the array)
router.post('/exams', (req, res) => {
    const newExam = req.body;
    newExam.id = exams.length + 1; // Generate a new ID
    exams.push(newExam);
    res.status(201).json({ message: 'Exam added successfully', exam: newExam });
});


module.exports = router;
