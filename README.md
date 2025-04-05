# 1. **List of Contributors**

- **Features:**
  - **Sullano:** Leader.
  - **Alferez:** Implement user add functionality.
  - **Mabano:** Implement user listing and retrieval functionality.
  - **Jaca:** Implement user update functionality.
  - **Leader:** Manage the `main` branch and ensure integration.

---

# 2. ** API DOCUMENTATION ** 
### 1: GET http://localhost:3000/exams-group
- {"message": "Group C API"}
### 2: GET http://localhost:3000/exams
- {
  "exams": [
    {
      "id": 1,
      "name": "Math Exam",
      "date": "2025-04-10"
    },
    {
      "id": 2,
      "name": "Science Exam",
      "date": "2025-04-15"
    }
  ]
}

### 3: POST http://localhost:3000/exams
- { "name": "'Science Exam'", "date": "'2025-04-15'" }

### 4: UPDATE http://localhost:3000/exams/3
- { "name": "'PE Exam'", "date": "'2025-04-15'" }