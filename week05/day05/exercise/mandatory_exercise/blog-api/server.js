// server.js
const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

// Simulated database
let posts = [
  { id: 1, title: "First Post", content: "This is my first blog post." },
  { id: 2, title: "Second Post", content: "Another day, another post." }
];

// GET /posts - list all posts
app.get('/posts', (req, res) => {
  res.json(posts);
});

// GET /posts/:id - get a post by ID
app.get('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
});

// POST /posts - create a new post
app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }
  const newPost = {
    id: posts.length + 1,
    title,
    content
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// PUT /posts/:id - update an existing post
app.put('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, content } = req.body;
  const postIndex = posts.findIndex(p => p.id === postId);

  if (postIndex !== -1) {
    posts[postIndex] = {
      id: postId,
      title: title || posts[postIndex].title,
      content: content || posts[postIndex].content,
    };
    res.json(posts[postIndex]);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
});

// DELETE /posts/:id - delete a post
app.delete('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = posts.findIndex(p => p.id === postId);
  if (postIndex !== -1) {
    posts.splice(postIndex, 1);
    res.json({ message: "Post deleted" });
  } else {
    res.status(404).json({ message: "Post not found" });
  }
});

// Handle invalid routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server error" });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
