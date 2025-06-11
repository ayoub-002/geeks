// routes/books.js
const express = require('express');
const router = express.Router();

let books = [];
let id = 1;

router.get('/', (req, res) => {
  res.json(books);
});

router.post('/', (req, res) => {
  const book = { id: id++, ...req.body };
  books.push(book);
  res.status(201).json(book);
});

router.put('/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === bookId);
  if (index !== -1) {
    books[index] = { id: bookId, ...req.body };
    res.json(books[index]);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

router.delete('/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  books = books.filter(b => b.id !== bookId);
  res.status(204).send();
});

module.exports = router;
