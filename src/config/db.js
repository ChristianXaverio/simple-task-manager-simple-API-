const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");   // <--- log sebelum connect
    await mongoose.connect(process.env.MONGODB_URI); 
    console.log("✅ MongoDB Connected");       // <--- log setelah connect
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;