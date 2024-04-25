const { volumeKubus } = require('./kubus');
const { volumeBalok } = require('./balok');
const { volumePrisma } = require('./prisma');

const kubus = volumeKubus(5);
const balok = volumeBalok(3, 4, 5);
const prisma = volumePrisma(3, 4, 5);

console.log(`Volume kubus: ${kubus}`);
console.log(`Volume balok: ${balok}`);
console.log(`Volume prisma segitiga: ${prisma}`);

const fs = require('fs')

const volumeInfo = `Volume kubus adalah ${kubus}`;

console.log(volumeInfo);

fs.writeFileSync('./dummy.txt', `Volume Kubus: ${volumeInfo}`, { encoding: 'utf-8' });


// const person = {
//     name: "efendi",
//     age: 23,
// }

// fs.writeFile('./dummy.txt', JSON.stringify(person), 'utf-8', (err) => {
//     if (err) console.log('Error savinf data')
// })

// fs.readFile('./dummy.txt',  'utf-8', (err, data) => {
//     console.log(JSON.parse(data))
// })

const { writeToFile } = require('./write');
const { readFromFile } = require('./read');

const data = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
      },
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
      },
      {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
      },
      {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
      },
      {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
      },
      {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
      },
      {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
      },
      {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
      },
      {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
      },
    ]

// Menuliskan data ke dalam file 'dummy.txt'
writeToFile(data, 'dummy.txt');

// Membaca data dari file 'dummy.txt'
readFromFile('dummy.txt');


// memanipulasi data, write dan read index - txt - read,write