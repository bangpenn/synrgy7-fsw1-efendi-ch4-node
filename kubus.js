const volumeKubus = (sisi) => {
  if (typeof sisi !== 'number') {
    throw new Error('Sisi harus number');
  }
  if (sisi <= 0) {
    throw new Error('Sisi harus lebih dari 0');
  }
  
  return sisi ** 3; 
};




module.exports = { volumeKubus };
