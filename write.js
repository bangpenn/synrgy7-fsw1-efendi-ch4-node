const fs = require('fs');

const writeToFile = (data, fileName) => {

  fs.writeFile(fileName, JSON.stringify(data), 'utf-8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('Data has been written to the file.');
  });
};

module.exports = { writeToFile };