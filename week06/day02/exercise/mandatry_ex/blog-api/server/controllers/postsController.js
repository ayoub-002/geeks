const Post = require('../models/postsModel');

exports.getAllPosts = async (req, res) => {
  const posts = await Post.getAll();
  res.json(posts);
};

exports.getPostById = async (req, res) => {
  const post = await Post.getById(req.params.id);
  post ? res.json(post) : res.status(404).send('Post not found');
};

exports.createPost = async (req, res) => {
  const [newPost] = await Post.create(req.body);
  res.status(201).json(newPost);
};

exports.updatePost = async (req, res) => {
  const [updated] = await Post.update(req.params.id, req.body);
  updated ? res.json(updated) : res.status(404).send('Post not found');
};

exports.deletePost = async (req, res) => {
  const deleted = await Post.remove(req.params.id);
  deleted ? res.sendStatus(204) : res.status(404).send('Post not found');
};
