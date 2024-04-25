const fs = require('fs');

const readFromFile = (fileName) => {
    // Membaca data dari file
    fs.readFile(fileName, 'utf-8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        return;
      }
      console.log('Data from file:', JSON.parse(data));
    });
  };

  module.exports = { readFromFile };