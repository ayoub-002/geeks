const fs = require('fs');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const filePath = path.join(__dirname, '..', 'users.json');

const readUsers = () => {
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
};

const writeUsers = (users) => {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
};

exports.registerUser = async (req, res) => {
  const { name, lastName, email, username, password } = req.body;
  if (!name || !lastName || !email || !username || !password) {
    return res.status(400).send('All fields are required.');
  }

  const users = readUsers();
  if (users.find(user => user.username === username)) {
    return res.status(409).send('Username already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: uuidv4(),
    name,
    lastName,
    email,
    username,
    password: hashedPassword
  };

  users.push(newUser);
  writeUsers(users);
  res.send('Hello your account is now created!');
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  const users = readUsers();

  const user = users.find(u => u.username === username);
  if (!user) return res.status(404).send('Username is not registered');

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).send('Incorrect password');

  res.send(`Hi ${username} welcome back again`);
};

exports.getUsers = (req, res) => {
  res.json(readUsers());
};

exports.getUserById = (req, res) => {
  const users = readUsers();
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).send('User not found');
  res.json(user);
};

exports.updateUser = (req, res) => {
  const users = readUsers();
  const userIndex = users.findIndex(u => u.id === req.params.id);
  if (userIndex === -1) return res.status(404).send('User not found');

  users[userIndex] = { ...users[userIndex], ...req.body };
  writeUsers(users);
  res.send('User updated successfully');
};
