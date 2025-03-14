const express = require('express');
const PurchaseOrder = require('../models/PurchaseOrder');

const router = express.Router();

// Add new purchase order
router.post('/', async (req, res) => {
    try {
        const purchaseOrder = new PurchaseOrder(req.body);
        await purchaseOrder.save();
        res.status(201).json({ message: "Purchase order added successfully!", purchaseOrder });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all purchase orders
router.get('/', async (req, res) => {
    try {
        const purchaseOrders = await PurchaseOrder.find();
        res.status(200).json(purchaseOrders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
