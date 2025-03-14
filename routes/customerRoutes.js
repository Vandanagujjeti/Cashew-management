const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

// POST: Register a new customer
router.post('/register', async (req, res) => {
    try {
        // Validate input
        const { first_name, last_name, email, contact_number, pincode } = req.body;

        if (!/^[a-zA-Z\s]+$/.test(first_name) || !/^[a-zA-Z\s]+$/.test(last_name)) {
            return res.status(400).json({ error: "First and Last name should contain only letters." });
        }

        if (!/^\d{6}$/.test(pincode)) {
            return res.status(400).json({ error: "Pincode must be exactly 6 digits." });
        }

        if (!/^\d{10,12}$/.test(contact_number)) {
            return res.status(400).json({ error: "Contact number must be 10-12 digits." });
        }

        // Check if email already exists
        const existingCustomer = await Customer.findOne({ email });
        if (existingCustomer) {
            return res.status(400).json({ error: "Email already registered. Use a different email." });
        }

        // Create and save new customer
        const customer = new Customer(req.body);
        await customer.save();

        res.status(201).json({ message: "Customer registered successfully!", customer });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET: Retrieve all customers
router.get('/', async (req, res) => {
    try {
        const customers = await Customer.find();
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
