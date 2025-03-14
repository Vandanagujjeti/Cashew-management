const mongoose = require("mongoose");

const rawMaterialSchema = new mongoose.Schema({
    raw_material_id: { type: String, required: true, unique: true },
    raw_material_name: { type: String, required: true },
    raw_material_min_qty: { type: Number, required: true },
    raw_material_total_qty: { type: Number, required: true },
    raw_material_unit: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("RawMaterial", rawMaterialSchema);
