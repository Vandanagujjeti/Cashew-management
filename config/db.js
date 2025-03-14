const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5001, // Timeout after 5 sec if it can't connect
        });
        console.log(`✅ MongoDB Connected: ${process.env.MONGO_URI}`);
    } catch (err) {
        console.error("❌ MongoDB Connection Error:", err.message);
        process.exit(1); // Exit process on failure
    }
};

module.exports = connectDB;
