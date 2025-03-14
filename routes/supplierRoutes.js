const express = require('express');
const Supplier = require('../models/Supplier');

const router = express.Router();

// Create Supplier
router.post('/add', async (req, res) => {
    try {
        const supplier = new Supplier(req.body);
        await supplier.save();
        res.status(201).json({ message: "Supplier added successfully!", supplier });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get All Suppliers
router.get('/', async (req, res) => {
    try {
        const suppliers = await Supplier.find();
        res.status(200).json(suppliers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
