const express = require('express');
const path = require('path');
const userRoutes = require('./routes/users');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve HTML files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', userRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
