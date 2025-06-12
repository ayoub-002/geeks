let books = [
  { id: 1, title: '1984', author: 'George Orwell', publishedYear: 1949 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960 }
];

module.exports = {
  getAll: () => books,
  getById: (id) => books.find(book => book.id === id),
  create: (book) => {
    book.id = books.length ? books[books.length - 1].id + 1 : 1;
    books.push(book);
    return book;
  },
  update: (id, newBook) => {
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
      books[index] = { id, ...newBook };
      return books[index];
    }
    return null;
  },
  remove: (id) => {
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
      return books.splice(index, 1);
    }
    return null;
  }
};
