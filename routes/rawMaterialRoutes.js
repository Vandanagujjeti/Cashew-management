const express = require("express");
const router = express.Router();
const RawMaterial = require("../models/RawMaterial");

// 1️⃣ Add a new raw material
router.post("/", async (req, res) => {
    try {
        console.log("Received Data:", req.body); // Debugging log

        if (!req.body.raw_material_name || !req.body.raw_material_total_qty) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const newMaterial = new RawMaterial(req.body);
        await newMaterial.save();

        res.status(201).json({ message: "Raw material added successfully!", data: newMaterial });
    } catch (error) {
        console.error("Error saving raw material:", error);
        res.status(500).json({ error: error.message });
    }
});

// 2️⃣ Get all raw materials
router.get("/", async (req, res) => {
    try {
        const materials = await RawMaterial.find();
        res.json(materials);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 3️⃣ Get a single raw material by ID
router.get("/:id", async (req, res) => {
    try {
        const material = await RawMaterial.findById(req.params.id);
        if (!material) return res.status(404).json({ message: "Raw material not found" });
        res.json(material);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 4️⃣ Update a raw material by ID
router.put("/:id", async (req, res) => {
    try {
        console.log("Update Request Body:", req.body); // Debugging log

        const updatedMaterial = await RawMaterial.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedMaterial) return res.status(404).json({ message: "Raw material not found" });
        res.json({ message: "Raw material updated successfully!", data: updatedMaterial });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 5️⃣ Delete a raw material by ID
router.delete("/:id", async (req, res) => {
    try {
        const deletedMaterial = await RawMaterial.findByIdAndDelete(req.params.id);
        if (!deletedMaterial) return res.status(404).json({ message: "Raw material not found" });
        res.json({ message: "Raw material deleted successfully!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
