// routes/todos.js
const express = require('express');
const router = express.Router();

let todos = [];
let id = 1;

router.get('/', (req, res) => {
  res.json(todos);
});

router.post('/', (req, res) => {
  const todo = { id: id++, ...req.body };
  todos.push(todo);
  res.status(201).json(todo);
});

router.put('/:id', (req, res) => {
  const todoId = parseInt(req.params.id);
  const index = todos.findIndex(t => t.id === todoId);
  if (index !== -1) {
    todos[index] = { id: todoId, ...req.body };
    res.json(todos[index]);
  } else {
    res.status(404).json({ message: 'To-do not found' });
  }
});

router.delete('/:id', (req, res) => {
  const todoId = parseInt(req.params.id);
  todos = todos.filter(t => t.id !== todoId);
  res.status(204).send();
});

module.exports = router;
