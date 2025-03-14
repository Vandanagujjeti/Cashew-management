const express = require("express");
const router = express.Router();
const { getCashews, createCashew, deleteCashew } = require("../controllers/cashewController");

// Test route to check if API is working
router.get("/test", (req, res) => {
    res.json({ message: "Cashew API is working!" });
});

// Routes
router.get("/", getCashews);              // GET all cashews
router.post("/", createCashew);           // POST new cashew
router.delete("/:id", deleteCashew);      // DELETE cashew by ID

module.exports = router;
