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

// Jaca: PUT /exams/:id (updates an exam)
router.put('/exams/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedExam = req.body;
    
    const examIndex = exams.findIndex((exam) => exam.id === id);
    if (examIndex === -1) {
        return res.status(404).json({ message: 'Exam not found' });
    }

    exams[examIndex] = { ...exams[examIndex], ...updatedExam }; // Update the exam
    res.status(200).json({ message: 'Exam updated successfully', exam: exams[examIndex] });
});
module.exports = router;
