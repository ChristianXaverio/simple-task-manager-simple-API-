const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
  },
  description: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    enum: ["pending", "in_progress", "done"],
    default: "pending",
  },
  priority: {
    type: Number,
    min: [1, "Priority must be at least 1"],
    max: [5, "Priority must be at most 5"],
  },
  due_date: {
    type: Date,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

// ✅ Middleware untuk update timestamp setiap kali disimpan
taskSchema.pre("save", function () {
  this.updated_at = Date.now();
});

module.exports = mongoose.model("Task", taskSchema);