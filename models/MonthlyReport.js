const mongoose = require('mongoose');

const monthlyReportSchema = new mongoose.Schema({
    month: { type: String, required: true },
    totalSales: { type: Number, required: true },
    totalQuantity: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('MonthlyReport', monthlyReportSchema);
