const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
    sup_id: { type: String, required: true, unique: true },
    sup_name: { type: String, required: true },
    sup_contact: { type: String, required: true },
    sup_email: { type: String, required: true },
    sup_address: { type: String, required: true },
    sup_city: { type: String, required: true },
    sup_state: { type: String, required: true },
    sup_pincode: { type: String, required: true }
});

module.exports = mongoose.model('Supplier', supplierSchema);
