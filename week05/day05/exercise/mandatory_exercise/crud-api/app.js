const express = require('express');
const app = express();

const dataService = require('./data/dataService');

app.get('/posts', async (req, res) => {
  try {
    const posts = await dataService.fetchPosts();
    console.log("Data successfully retrieved");
    res.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Failed to retrieve posts" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
