const fs = require('fs-extra');

exports.readData = async (file) => {
  try {
    const data = await fs.readFile(file, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
};

exports.writeData = async (file, data) => {
  try {
    await fs.writeFile(file, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error('Error writing file:', err);
  }
};
