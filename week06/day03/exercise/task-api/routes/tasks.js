const express = require('express');
const router = express.Router();
const fs = require('fs-extra');
const path = require('path');

const filePath = path.join(__dirname, '../tasks.json');

// Helper to read tasks
const readTasks = async () => {
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
};

// Helper to write tasks
const writeTasks = async (tasks) => {
  await fs.writeFile(filePath, JSON.stringify(tasks, null, 2));
};

// GET /tasks
router.get('/', async (req, res) => {
  const tasks = await readTasks();
  res.json(tasks);
});

// GET /tasks/:id
router.get('/:id', async (req, res) => {
  const tasks = await readTasks();
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
});

// POST /tasks
router.post('/', async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) return res.status(400).json({ error: 'Title and description required' });

  const tasks = await readTasks();
  const newTask = {
    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
    title,
    description,
    completed: false
  };
  tasks.push(newTask);
  await writeTasks(tasks);
  res.status(201).json(newTask);
});

// PUT /tasks/:id
router.put('/:id', async (req, res) => {
  const { title, description, completed } = req.body;
  const tasks = await readTasks();
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ error: 'Task not found' });

  if (title) task.title = title;
  if (description) task.description = description;
  if (typeof completed === 'boolean') task.completed = completed;

  await writeTasks(tasks);
  res.json(task);
});

// DELETE /tasks/:id
router.delete('/:id', async (req, res) => {
  let tasks = await readTasks();
  const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (taskIndex === -1) return res.status(404).json({ error: 'Task not found' });

  const deletedTask = tasks.splice(taskIndex, 1);
  await writeTasks(tasks);
  res.json({ message: 'Task deleted', deletedTask });
});

module.exports = router;
