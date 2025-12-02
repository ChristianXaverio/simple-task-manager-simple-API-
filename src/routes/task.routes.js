const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task.controller");

// Endpoint untuk membuat task
router.post("/tasks", taskController.createTask);

// Endpoint untuk melihat semua task (dengan filter/search optional)
router.get("/tasks", taskController.getTasks);

// Endpoint untuk melihat detail task berdasarkan ID
router.get("/tasks/:id", taskController.getTaskById);

// Endpoint untuk update task berdasarkan ID
router.put("/tasks/:id", taskController.updateTask);

// Endpoint untuk hapus task berdasarkan ID
router.delete("/tasks/:id", taskController.deleteTask);

module.exports = router;