const Task = require("../models/task.model");

// Create Task
exports.createTask = async (req, res, next) => {
  try {
    const { title, description, completed } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const task = await Task.create({ title, description, completed });
    res.status(201).json(task);
  } catch (err) {
  res.status(500).json({ error: err.message });
  }
};

// Get All Tasks (with filter & search)
exports.getTasks = async (req, res) => {
  try {
    const { status, q } = req.query;
    let filter = {};

    if (status) filter.status = status;
    if (q) {
      filter.$or = [
        { title: { $regex: q, $options: "i" } },
        { description: { $regex: q, $options: "i" } },
      ];
    }

    const tasks = await Task.find(filter);
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Task by ID
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Task
exports.updateTask = async (req, res) => {
  try {
    const { title, description, status, priority, due_date } = req.body;

    if (status && !["pending", "in_progress", "done"].includes(status)) {
      return res.status(400).json({ error: "Invalid status" });
    }
    if (priority && (priority < 1 || priority > 5)) {
      return res.status(400).json({ error: "Priority must be between 1 and 5" });
    }

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { title, description, status, priority, due_date, updated_at: Date.now() },
      { new: true, runValidators: true }
    );

    if (!task) return res.status(404).json({ error: "Task not found" });
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Task
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};