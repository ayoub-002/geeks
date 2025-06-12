const db = require('../config/db');

const getAllUsers = () => db('users').select('*');

const getUserById = (id) => db('users').where({ id }).first();

const getUserByUsername = (username) => db('users').where({ username }).first();

const updateUser = (id, data) => db('users').where({ id }).update(data);

module.exports = { getAllUsers, getUserById, getUserByUsername, updateUser };
