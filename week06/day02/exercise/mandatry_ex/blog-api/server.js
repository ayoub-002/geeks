const express = require('express');
const app = express();
const postRoutes = require('./server/routes/postsRoutes');

app.use(express.json());
app.use('/posts', postRoutes);

app.use((req, res) => res.status(404).send('Route not found'));
app.use((err, req, res, next) => res.status(500).send('Server error'));

app.listen(3000, () => console.log('Server running on port 3000'));
