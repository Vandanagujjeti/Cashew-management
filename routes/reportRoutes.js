const express = require('express');
const router = express.Router();
const DailyReport = require('../models/DailyReport');
const MonthlyReport = require('../models/MonthlyReport');

// POST: Create a Daily Report
router.post('/daily', async (req, res) => {
    try {
        const { date, sales, expenses } = req.body;

        // Validation: Check required fields
        if (!date || !sales || !expenses) {
            return res.status(400).json({ error: "All fields (date, sales, expenses) are required." });
        }

        const report = new DailyReport({ date, sales, expenses });
        await report.save();

        res.status(201).json({ message: "Daily report created successfully!", report });
    } catch (err) {
        console.error("Error creating daily report:", err);
        res.status(500).json({ error: "Server error. Please try again later." });
    }
});

// POST: Create a Monthly Report
router.post('/monthly', async (req, res) => {
    try {
        const { month, totalSales, totalQuantity } = req.body;

        // Validation: Check required fields
        if (!month || !totalSales || !totalQuantity) {
            return res.status(400).json({ error: "All fields (month, totalSales, totalQuantity) are required." });
        }

        const report = new MonthlyReport({ month, totalSales, totalQuantity });
        await report.save();

        res.status(201).json({ message: "Monthly report created successfully!", report });
    } catch (err) {
        console.error("Error creating monthly report:", err);
        res.status(500).json({ error: "Server error. Please try again later." });
    }
});

// GET: Fetch all Daily Reports
router.get('/daily', async (req, res) => {
    try {
        const reports = await DailyReport.find();

        if (!reports.length) {
            return res.status(404).json({ message: "No daily reports found." });
        }

        res.status(200).json(reports);
    } catch (err) {
        console.error("Error fetching daily reports:", err);
        res.status(500).json({ error: "Server error. Please try again later." });
    }
});

// GET: Fetch all Monthly Reports
router.get('/monthly', async (req, res) => {
    try {
        const reports = await MonthlyReport.find();

        if (!reports.length) {
            return res.status(404).json({ message: "No monthly reports found." });
        }

        res.status(200).json(reports);
    } catch (err) {
        console.error("Error fetching monthly reports:", err);
        res.status(500).json({ error: "Server error. Please try again later." });
    }
});

module.exports = router;
