// app.js (atau nama file utama Anda)
const { calculateCubeVolume, calculateCuboidVolume, calculateTriangularPrismVolume } = require('./volume');

// Gunakan fungsi untuk menghitung volume
const cubeVolume = calculateCubeVolume(5);
const cuboidVolume = calculateCuboidVolume(3, 4, 5);
const triangularPrismVolume = calculateTriangularPrismVolume(3, 4, 5);

console.log(`Volume of the cube: ${cubeVolume}`);
console.log(`Volume of the cuboid: ${cuboidVolume}`);
console.log(`Volume of the triangular prism: ${triangularPrismVolume}`);
