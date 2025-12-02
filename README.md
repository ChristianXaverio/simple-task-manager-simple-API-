# 📌 Simple Task Manager API

REST API sederhana untuk mengelola task menggunakan **Node.js**, **Express.js**, dan **MongoDB (Mongoose)**.  
Project ini dibuat sebagai latihan membangun backend dengan struktur rapi, validasi input, dan error handling.

---

## 🚀 Fitur
- Membuat task (judul, deskripsi, status, priority, due_date)
- Melihat daftar task (dengan filter status & search query)
- Melihat detail task berdasarkan ID
- Mengupdate task
- Menghapus task

---

## 🛠 Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**

---

## 📂 Struktur Project


---

## 🗄️ Desain Database
Collection: `tasks`

Field:
- `title` (String, wajib)
- `description` (String, optional)
- `status` (String, default: `"pending"`, enum: `pending | in_progress | done`)
- `priority` (Number, optional, 1–5)
- `due_date` (Date, optional)
- `created_at` (Date, default: now)
- `updated_at` (Date, default: now)

---

## ⚙️ Setup & Menjalankan Project

1. **Clone repo**
   ```bash
   git clone https://github.com/<username>/simple-task-manager.git
   cd simple-task-manager

2. - Install dependencies
npm install

3. - Buat file .env berdasarkan .env.example
PORT=3000
MONGODB_URI=mongodb://localhost:27017/task_manager


- Jalankan server
npm start


- atau
node src/app.js


Server akan berjalan di http://localhost:3000.

📡 Endpoint
1. Create Task
POST /api/tasks
Body:
{
  "title": "Belajar REST API",
  "description": "Membuat task manager dengan Node.js dan MongoDB",
  "status": "pending",
  "priority": 3
}



2. Get All Tasks
GET /api/tasks?status=pending&q=REST
Query optional:
- status → filter berdasarkan status
- q → search di title/description

3. Get Task by ID
GET /api/tasks/:id

4. Update Task
PUT /api/tasks/:id
Body:
{
  "title": "Belajar REST API (updated)",
  "status": "done",
  "priority": 4
}



5. Delete Task
DELETE /api/tasks/:id
Response:
{
  "message": "Task deleted successfully"
}



