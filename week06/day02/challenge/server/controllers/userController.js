const db = require('../config/db');
const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');
const hashModel = require('../models/hashpwdModel');

const register = async (req, res) => {
  const { email, username, password, first_name, last_name } = req.body;

  if (!email || !username || !password) {
    return res.status(400).json({ error: 'Email, username, and password are required.' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await db.transaction(async trx => {
      await trx('users').insert({ email, username, first_name, last_name });
      await trx('hashpwd').insert({ username, password: hashedPassword });
    });

    res.status(201).json({ message: 'User registered successfully.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashRecord = await hashModel.getPasswordByUsername(username);

    if (!hashRecord) return res.status(404).json({ error: 'User not found' });

    const valid = await bcrypt.compare(password, hashRecord.password);

    if (!valid) return res.status(401).json({ error: 'Invalid password' });

    res.json({ message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await userModel.getUserById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    await userModel.updateUser(req.params.id, req.body);
    res.json({ message: 'User updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { register, login, getAllUsers, getUserById, updateUser };
