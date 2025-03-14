require('dotenv').config();
require('./cronJobs'); // ✅ Import cron jobs

// ✅ Import Required Modules
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// ✅ Database Connection
const connectDB = require("./config/db");

// Import Routes
const cashewRoutes = require("./routes/cashewRoutes");
const adminRoutes = require("./routes/adminRoutes");
const rawMaterialRoutes = require("./routes/rawMaterialRoutes");
const purchaseOrderRoutes = require("./routes/purchaseOrderRoutes");
const supplierRoutes = require("./routes/supplierRoutes");
const orderRoutes = require("./routes/orderRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const reportRoutes = require("./routes/reportRoutes");
const customerRoutes = require("./routes/customerRoutes");
const itemRoutes = require("./routes/itemRoutes");

// ✅ Initialize Express App
const app = express();

// ✅ Middleware (CORS, Security, Body Parsing)
app.use(cors());
app.use(helmet());
app.use(express.json()); // 🔴 Must be BEFORE routes!
app.use(express.urlencoded({ extended: true }));

// ✅ Define API Base URL (if used elsewhere)
const API_BASE_URL = "https://vandanagujjeti.github.io/Cashew-management/api";

// ✅ API Routes
app.use("/api/cashews", cashewRoutes);
app.use("/api/auth", adminRoutes);
app.use("/api/raw-materials", rawMaterialRoutes);
app.use("/api/purchase-orders", purchaseOrderRoutes);
app.use("/api/suppliers", supplierRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/items", itemRoutes);

// ✅ Default Route
app.get("/", (req, res) => {
  res.send("🚀 Cashew Management System API is running...");
});

// ✅ Connect to MongoDB
connectDB()
  .then(() => console.log("✅ Database connected successfully!"))
  .catch((err) => {
    console.error("❌ Database connection failed:", err.message);
    process.exit(1);
  });

// ✅ Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`⚡ Server running on port ${PORT}`));
