const Cashew = require("../models/cashewModel");

// GET all cashews
const getCashews = async (req, res) => {
    try {
        const cashews = await Cashew.find();
        res.status(200).json(cashews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// POST a new cashew
const createCashew = async (req, res) => {
    const { name, quantity, price, description } = req.body;

    try {
        const cashew = await Cashew.create({ name, quantity, price, description });
        res.status(201).json(cashew);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE a cashew
const deleteCashew = async (req, res) => {
    const { id } = req.params;

    try {
        await Cashew.findByIdAndDelete(id);
        res.status(200).json({ message: "Cashew deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getCashews, createCashew, deleteCashew };
