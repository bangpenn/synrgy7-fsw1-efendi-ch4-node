const volumePrisma = (baseLength, height, length) => {
    if (typeof baseLength !== 'number' || typeof height !== 'number' || typeof length !== 'number') {
      throw new Error('Harus number');
    }
    if (baseLength <= 0 || height <= 0 || length <= 0) {
      throw new Error('Harus lebih dari 0');
    }
    
    return (baseLength * height * length) / 2; 
  };

  module.exports = { volumePrisma };
  