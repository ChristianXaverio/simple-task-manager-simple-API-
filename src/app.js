require("dotenv").config();
console.log("ENV MONGODB_URI:", process.env.MONGODB_URI); // <--- cek isi variabel

const express = require("express");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/task.routes");

const app = express();

app.use(express.json());
app.use("/api", taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

console.log("Starting server..."); // <--- log saat server mulai
connectDB();