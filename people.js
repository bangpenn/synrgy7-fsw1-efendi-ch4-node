const fs = require('fs');

const readFromFile = (fileName) => {

    fs.readFile(fileName, 'utf-8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        return;
      }
      console.log('Data from file:', JSON.parse(data));
    });
  };

  const writeToFile = (data, fileName) => {

    fs.writeFile(fileName, JSON.stringify(data), 'utf-8', (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }
      console.log('Data has been written to the file.');
    });
  };

  const detail = (id, data) => {
    // Cari orang dengan ID yang sesuai
    const person = data.find((person) => person.id === id);
  
    // Jika orang ditemukan, tampilkan detailnya
    if (person) {
      console.log(`Detail by ID ${id}:`);
      console.log(person);
    } else {
      console.log(`Detail by ID ${id} not found.`);
    }
  };

  const fs = require('fs');

const addData = (fileName, newData) => {
  // Baca file JSON
  fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    try {
      // Parse data JSON menjadi objek JavaScript
      const parsedData = JSON.parse(data);

      // Menambahkan newData ke array data yang sudah ada
      parsedData.push(newData);

      // Tulis kembali data ke file JSON
      fs.writeFile(fileName, JSON.stringify(parsedData, null, 2), 'utf-8', (err) => {
        if (err) {
          console.error('Error writing to file:', err);
          return;
        }
        console.log('Data added successfully');
      });
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  });
};



  module.exports = { writeToFile, readFromFile, detail, addData };
