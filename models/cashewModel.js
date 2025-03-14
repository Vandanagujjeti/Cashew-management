const mongoose = require("mongoose");

const cashewSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Cashew", cashewSchema);
