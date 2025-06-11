// app.js
const express = require('express');
const app = express();
const booksRouter = require('./routes/books');

app.use(express.json());
app.use('/books', booksRouter);

app.listen(3000, () => {
  console.log('Book API running at http://localhost:3000');
});
