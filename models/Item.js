const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    itemName: String,
    rawStock: Number,
    processedStock: Number
});

module.exports = mongoose.model('Item', itemSchema);
