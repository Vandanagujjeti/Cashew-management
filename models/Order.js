const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    order_id: { type: String, required: true },
    customer_id: { type: String, required: true },
    customer_name: { type: String, required: true },
    date_of_order: { type: Date, default: Date.now },
    date_of_dispatch: { type: Date },
    tax_value: { type: Number },
    total_taxes: { type: Number },
    total_amount: { type: Number, required: true }
});

module.exports = mongoose.model('Order', orderSchema);
