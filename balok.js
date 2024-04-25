const volumeBalok = (panjang, lebar, tinggi) => {
    if (typeof panjang !== 'number' || typeof lebar !== 'number' || typeof tinggi !== 'number') {
      throw new Error('Harus number');
    }
    if (panjang <= 0 || lebar <= 0 || tinggi <= 0) {
      throw new Error('Harus lebih dari 0');
    }
    
    return panjang * lebar * tinggi;
  };

  module.exports = { volumeBalok };