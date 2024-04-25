const { volumeKubus } = require('./kubus');
const { volumeBalok } = require('./balok');
const { volumePrisma } = require('./prisma');

const kubus = volumeKubus(5);
const balok = volumeBalok(3, 4, 5);
const prisma = volumePrisma(3, 4, 5);

console.log(`Volume kubus: ${kubus}`);
console.log(`Volume balok: ${balok}`);
console.log(`Volume prisma segitiga: ${prisma}`);
