const mongoose = require('mongoose');

const dailyReportSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    sales: { type: Number, required: true },
    expenses: { type: Number, required: true }
});

module.exports = mongoose.model('DailyReport', dailyReportSchema);
