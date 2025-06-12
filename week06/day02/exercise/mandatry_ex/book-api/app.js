const express = require('express');
const app = express();
const bookRoutes = require('./server/routes/booksRoutes');

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/books', bookRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
