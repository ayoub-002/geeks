const db = require('../config/db');

const getPasswordByUsername = (username) => db('hashpwd').where({ username }).first();

module.exports = { getPasswordByUsername };
