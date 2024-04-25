const fs = require('fs');

// Fungsi untuk menulis data ke dalam file
const writeToFile = (data, fileName) => {
  // Menulis data ke dalam file
  fs.writeFile(fileName, JSON.stringify(data), 'utf-8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('Data has been written to the file.');
  });
};

module.exports = { writeToFile };