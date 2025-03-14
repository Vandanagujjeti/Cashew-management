const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");

// POST - Add new employee
router.post("/", async (req, res) => {
    try {
        const newEmployee = new Employee(req.body);
        await newEmployee.save();
        res.status(201).json({ message: "Employee registered successfully!", employee: newEmployee });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// GET - Fetch all employees
router.get("/", async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE - Remove an employee by ID
router.delete("/:id", async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Employee deleted successfully!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
