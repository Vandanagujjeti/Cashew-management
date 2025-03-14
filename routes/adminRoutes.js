const express = require("express");
const Admin = require("../models/Admin"); // ✅ Import Admin Model
const router = express.Router();

// ✅ Admin Registration
router.post("/register", async (req, res) => {
    const { admin_id, password } = req.body;

    try {
        const adminExists = await Admin.findOne({ admin_id });
        if (adminExists) {
            return res.status(400).json({ message: "Admin already exists" });
        }

        const newAdmin = new Admin({ admin_id, password });
        await newAdmin.save();

        res.status(201).json({ message: "Admin registered successfully!" });
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
});

// ✅ Get All Admins (NEW)
router.get("/", async (req, res) => {
    try {
        const admins = await Admin.find();
        res.status(200).json(admins);
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
});

module.exports = router;
