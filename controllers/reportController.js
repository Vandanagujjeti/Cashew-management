const Report = require('../models/MonthlyReport');

// Get all reports
const getReports = async (req, res) => {
    try {
        const reports = await Report.find();
        res.status(200).json(reports);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Add new report
const addReport = async (req, res) => {
    try {
        const newReport = new Report(req.body);
        await newReport.save();
        res.status(201).json({ message: 'Report created!', report: newReport });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = { getReports, addReport };
