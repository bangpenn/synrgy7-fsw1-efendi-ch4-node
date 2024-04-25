// volume.js
const calculateCubeVolume = (sideLength) => {
  if (typeof sideLength !== 'number') {
    throw new Error('Side length must be a number');
  }
  if (sideLength <= 0) {
    throw new Error('Side length must be greater than 0');
  }
  
  return sideLength ** 3; // Calculate cube volume
};

const calculateCuboidVolume = (length, width, height) => {
  if (typeof length !== 'number' || typeof width !== 'number' || typeof height !== 'number') {
    throw new Error('All dimensions must be numbers');
  }
  if (length <= 0 || width <= 0 || height <= 0) {
    throw new Error('All dimensions must be greater than 0');
  }
  
  return length * width * height; // Calculate cuboid volume
};

const calculateTriangularPrismVolume = (baseLength, height, length) => {
  if (typeof baseLength !== 'number' || typeof height !== 'number' || typeof length !== 'number') {
    throw new Error('All dimensions must be numbers');
  }
  if (baseLength <= 0 || height <= 0 || length <= 0) {
    throw new Error('All dimensions must be greater than 0');
  }
  
  return (baseLength * height * length) / 2; // Calculate triangular prism volume
};

module.exports = { calculateCubeVolume, calculateCuboidVolume, calculateTriangularPrismVolume };
