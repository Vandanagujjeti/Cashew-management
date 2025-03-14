const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    first_name: { type: String, required: true, maxlength: 50 },
    last_name: { type: String, required: true, maxlength: 50 },
    email: { type: String, required: true, unique: true, match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ },
    contact_number: { type: String, required: true, maxlength: 12, match: /^[0-9]+$/ },
    contact_person: { type: String, required: true, maxlength: 100 },
    alternate_contact_number: { type: String, maxlength: 12, match: /^[0-9]*$/ },
    address: { type: String, required: true },
    state: { type: String, required: true, maxlength: 50 },
    city: { type: String, required: true, maxlength: 50 },
    pincode: { type: String, required: true, maxlength: 6, match: /^[0-9]+$/ }
}, { timestamps: true });

module.exports = mongoose.model('Customer', customerSchema);
