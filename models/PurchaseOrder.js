const mongoose = require('mongoose');

const purchaseOrderSchema = new mongoose.Schema({
    purchase_id: { type: String, required: true, unique: true },
    raw_material_id: { type: String, required: true },
    raw_material_name: { type: String, required: true },
    raw_material_required_qty: { type: Number, required: true },
    raw_material_qty_unit: { type: String, required: true },
    raw_material_rate: { type: Number, required: true },
    payable_value: { type: Number, required: true }
});

module.exports = mongoose.model('PurchaseOrder', purchaseOrderSchema);
