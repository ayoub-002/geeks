const Book = require('../models/booksModel');

exports.getAllBooks = (req, res) => {
  res.json(Book.getAll());
};

exports.getBookById = (req, res) => {
  const id = parseInt(req.params.bookId);
  const book = Book.getById(id);
  if (book) res.json(book);
  else res.status(404).json({ error: 'Book not found' });
};

exports.createBook = (req, res) => {
  const newBook = Book.create(req.body);
  res.status(201).json(newBook);
};

exports.updateBook = (req, res) => {
  const id = parseInt(req.params.bookId);
  const updated = Book.update(id, req.body);
  if (updated) res.json(updated);
  else res.status(404).json({ error: 'Book not found' });
};

exports.deleteBook = (req, res) => {
  const id = parseInt(req.params.bookId);
  const deleted = Book.remove(id);
  if (deleted) res.status(204).send();
  else res.status(404).json({ error: 'Book not found' });
};
